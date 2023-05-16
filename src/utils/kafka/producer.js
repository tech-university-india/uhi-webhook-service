const {Kafka} = require('kafkajs');
const {allTopics} = require('../../config/config');
const logger = require('../logging');
const kafka = new Kafka({
  clientId: process.env.KAFKA_PRODUCER_CLIENT_ID,
  brokers: [process.env.KAFKA_BROKERS],
});

const producer = kafka.producer({
  allowAutoTopicCreation: false,
  transactionTimeout: 30000,
  retry: {
    initialRetryTime: 1000,
    retries: 10,
    restartOnFailure: async () => true,
  },
});

const admin = kafka.admin();

const initProducer = async () => {
  await admin.connect();
  logger.kafkaLogger.info('Connected to the kafka instance as admin');

  const topics = await admin.listTopics();

  const topicsToCreate = allTopics.filter(topic => !topics.includes(topic));
  if (topicsToCreate.length > 0) {
    await admin.createTopics({
      waitForLeaders: true,
      topics: topicsToCreate.map(topic => ({topic, numPartitions: 31})),
    });
    logger.kafkaLogger.info(`Created topics ${topicsToCreate.join(', ')}`);
  }
  await producer.connect();
  await admin.disconnect();
  logger.kafkaLogger.info('Connected to the kafka instance as producer');
};

const produceMessage = async (topic, message) => {
  try {
    logger.kafkaLogger.info(
      'New Message to be sent to kafka instance topic: ' + topic
    );
    const id = message.body.resp?.requestId || message.body.requestId;
    const partition = id.slice(id.length - 2) ?? 0;
    await producer.send({
      topic,
      messages: [
        {
          partition: Number(partition),
          value: JSON.stringify(message),
        },
      ],
    });
    logger.kafkaLogger.info('Message sent to instance topic: ' + topic);
  } catch (error) {
    logger.kafkaLogger.error(
      'Error in sending message to kafka instance' + error
    );
  }
};

module.exports = {initProducer, produceMessage};

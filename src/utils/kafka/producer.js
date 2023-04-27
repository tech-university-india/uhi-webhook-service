const { Kafka } = require('kafkajs')
const { allTopics } = require('../../config/config')
const logger = require('../logging')
const kafka = new Kafka({
  clientId: process.env.KAFKA_PRODUCER_CLIENT_ID,
  brokers: [process.env.KAFKA_BROKERS]

})

const producer = kafka.producer({
<<<<<<< HEAD
  allowAutoTopicCreation: false,
  transactionTimeout: 30000,
  metadataMaxAge: 100
=======

  createPartitioner: () => ({ partition: 0 }),
  allowAutoTopicCreation: false,
  transactionTimeout: 30000
>>>>>>> 7309a4d8b94eb0133ab0fe9d2f9bc16da38304ca
})

const admin = kafka.admin()

const initProducer = async () => {
  await admin.connect()
  logger.kafkaLogger.info('Connected to the kafka instance as admin')
  const topics = await admin.listTopics()
  const topicsToCreate = allTopics.filter((topic) => !topics.includes(topic))
  if (topicsToCreate.length > 0) {
    await admin.createTopics({
      waitForLeaders: true,
      topics: topicsToCreate.map((topic) => ({ topic }))
    })
    logger.kafkaLogger.info(`Created topics ${topicsToCreate.join(', ')}`)
  }
  await producer.connect()
  logger.kafkaLogger.info('Connected to the kafka instance as producer')
}

const produceMessage = async (topic, message) => {
  try {
    logger.kafkaLogger.info(
      'New Message to be sent to kafka instance topic: ' + topic
    )
    await producer.send({
      topic,
      messages: [{ value: JSON.stringify(message) }]
    })
    logger.kafkaLogger.info('Message sent to instance topic: ' + topic)
  } catch (error) {
    logger.kafkaLogger.error(
      'Error in sending message to kafka instance' + error
    )
  }
}

module.exports = { initProducer, produceMessage }

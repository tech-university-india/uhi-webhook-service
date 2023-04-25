const { Kafka } = require('kafkajs')
const { allTopics } = require('../../config/config')
const logger = require('../logging')

const kafka = new Kafka({
  clientId: process.env.KAFKA_PRODUCER_CLIENT_ID,
  brokers: [process.env.KAFKA_BROKERS]
})

const producer = kafka.producer({
  allowAutoTopicCreation: true,
  transactionTimeout: 30000
})
const admin = kafka.admin()

const initProducer = async () => {
  await admin.connect()
  const topics = await admin.listTopics()
  const topicsToCreate = allTopics.filter((topic) => !topics.includes(topic))
  if (topicsToCreate.length > 0) {
    await admin.createTopics({
      topics: topicsToCreate.map((topic) => ({ topic }))
    })
    logger.kafkaLogger.log(`Created topics ${topicsToCreate.join(', ')}`)
  }
  await producer.connect()
  logger.kafkaLogger.log('Connected to the kafka instance')
}

const produceMessage = async (topic, message) => {
  logger.kafkaLogger.log(
    'New Message to be sent to kafka instance topic: ',
    topic
  )
  await producer.send({
    topic,
    messages: [{ value: JSON.stringify(message) }]
  })
  logger.kafkaLogger.log('Message sent to instance topic: ', topic)
}

module.exports = { initProducer, produceMessage }

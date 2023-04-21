const { Kafka } = require('kafkajs')
const { allTopics } = require('../../config/config')
require('dotenv').config()

const kafka = new Kafka({
  clientId: process.env.KAFKA_PRODUCER_CLIENT_ID,
  brokers: [process.env.KAFKA_BROKERS]
})

const producer = kafka.producer()
const admin = kafka.admin()
const initProducer = async () => {
  await admin.connect()
  const topics = await admin.listTopics()
  const topicsToCreate = allTopics.filter((topic) => !topics.includes(topic))
  if (topicsToCreate.length > 0) {
    await admin.createTopics({
      topics: topicsToCreate.map((topic) => ({ topic }))
    })
  }
  await producer.connect()
}

const produceMessage = async (topic, message) => {
  await producer.send({
    topic,
    messages: [{ value: JSON.stringify(message) }]
  })
}

module.exports = { initProducer, produceMessage }


const { Kafka } = require('kafkajs')
require('dotenv').config()

const kafka = new Kafka({
  clientId: process.env.KAFKA_CONSUMER_CLIENT_ID,
  brokers: [process.env.KAFKA_BROKERS]
})

const consumer = kafka.consumer({
  groupId: process.env.KAFKA_GROUP_ID
})

const initConsumer = async () => {
  await consumer.connect()
}

const consumeMessages = async (topic, handler) => {
  await consumer.subscribe({ topic, fromBeginning: false })

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const value = JSON.parse(message.value)
      await handler(value, topic, partition)
    }
  })
}

module.exports = { initConsumer, consumeMessages }

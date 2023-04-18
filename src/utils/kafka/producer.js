const { Kafka } = require('kafkajs')
require('dotenv').config()
// const partition = 1
// const replicationFactor = 1

const kafka = new Kafka({
  clientId: process.env.KAFKA_PRODUCER_CLIENT_ID,
  brokers: [process.env.KAFKA_BROKERS]
})

const producer = kafka.producer()

const initProducer = async () => {
  await producer.connect()
}

const produceMessage = async (topic, message) => {
  await producer.send({
    topic,
    messages: [{ value: JSON.stringify(message) }]
    // partition,
    // replicationFactor
  })
}

module.exports = { initProducer, produceMessage }

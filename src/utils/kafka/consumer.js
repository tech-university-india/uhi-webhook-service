
const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'my-consumer',
  brokers: ['localhost:9092']
})
const consumer = kafka.consumer({ groupId: 'my-group' })

const initConsumer = async () => {
  await consumer.connect()
}

const consumeMessages = async (topic, handler) => {
  await consumer.subscribe({ topic, fromBeginning: false })

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const value = JSON.parse(message.value)
      await handler(value)
    }
  })
}

module.exports = { initConsumer, consumeMessages }

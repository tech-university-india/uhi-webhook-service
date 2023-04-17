const { Kafka } = require('kafkajs')

// const partition = 1
// const replicationFactor = 1

const kafka = new Kafka({
  clientId: 'my-producer',
  brokers: ['localhost:9092']
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

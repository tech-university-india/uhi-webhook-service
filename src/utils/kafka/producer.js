const { Kafka } = require('kafkajs')
const { allTopics } = require('../../config/config')

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
    console.log(`Created topics ${topicsToCreate.join(', ')}`)
  }
  await producer.connect()
}

const produceMessage = async (topic, message) => {
  console.log(`Producing message to topic ${topic}`)
  await producer.send({
    topic,
    messages: [{ value: JSON.stringify(message) }]
  })
  console.log(`Message sent to topic ${topic}`)
}

module.exports = { initProducer, produceMessage }

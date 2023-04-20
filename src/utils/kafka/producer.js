// const { Kafka } = require('kafkajs')
// require('dotenv').config()
// const kafka = new Kafka({
//   clientId: process.env.KAFKA_PRODUCER_CLIENT_ID,
//   brokers: [process.env.KAFKA_BROKERS]
// })

const { KafkaClient, Producer } = require('kafka-node')

const client = new KafkaClient({ kafkaHost: process.env.KAFKA_BROKERS })
const producer = new Producer(client)
const initProducer = async () => {
  client.connect()
  client.on('ready', () => {
    console.log('Kafka Client is ready')
    client.createTopics(['auth', 'careContext'], (err, res) => {
      if (err) {
        throw err
      }
      console.log('TOPIC CREATED')
    })
    // client.topicExists('auth', (err, res) => {
    //   if (err) {
    //     throw err
    //   }
    //   if (!res) {

    //   }
    // })
  })
}

const produceMessage = async (topic, message) => {
  const payloads = [
    {
      topic,
      messages: [JSON.stringify(message)]
    }
  ]
  producer.send(payloads, (err, data) => {
    if (err) {
      throw err
    }
    console.log('data', data)
  })
}

// const producer = kafka.producer()
// const admin = kafka.admin()

// const initProducer = async () => {
//   await admin.connect()
//   const topics = await admin.listTopics()
//   console.log('topics', topics)

//   if (!topics.includes('auth')) {
//     await admin.createTopics({
//       waitForLeaders: true,
//       topics: [
//         {
//           topic: 'auth'
//         }
//       ]
//     })
//     const topics = await admin.listTopics()
//     console.log('topics', topics)
//   }
//   await producer.connect()
// }

// const produceMessage = async (topic, message) => {
//   console.log('produceMessage', topic, message)
//   await producer.send({
//     topic,
//     messages: [{ value: JSON.stringify(message) }]
//   })
// }

module.exports = { initProducer, produceMessage }

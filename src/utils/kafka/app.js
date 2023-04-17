const { initProducer, produceMessage } = require('./producer')
const { initConsumer, consumeMessages } = require('./consumer')

const run = async () => {
  await initProducer()
  await initConsumer()

  // Produce a message
  const message = { name: 'Kushagra', age: 25 }
  const topic = 'abdm'
  await produceMessage(topic, message)

  // Consume messages
  const handler = (message) => {
    console.log(`Received message: ${JSON.stringify(message)}`)
  }
  await consumeMessages(topic, handler)
}

run()

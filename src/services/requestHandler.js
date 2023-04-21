// const kafkaHandler = require('../utils/kafka/producer')

const { config } = require('../config/config')

async function request (info) {
  const data = config[info.path]
  if (!data) throw new Error('Invalid Path')
  // kafkaHandler.produceMessage(data.topic, info)
  return 'OK'
}

module.exports = { request }

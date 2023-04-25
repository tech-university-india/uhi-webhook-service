const kafkaHandler = require('../utils/kafka/producer')

const { config } = require('../config/config')
const { serverLogger } = require('../utils/logging')

async function request (info) {
  serverLogger.log('New Request from ABDM', info)
  const data = config[info.path]
  if (!data) throw new Error('Invalid Path')
  kafkaHandler.produceMessage(data.topic, info)
  return 'OK'
}

module.exports = { request }

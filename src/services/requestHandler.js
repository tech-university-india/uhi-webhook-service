const { produceMessage } = require('../utils/kafka/producer')

const { config } = require('../config/config')

async function request (info) {
  const data = config[info.path]

  if (!data) throw new Error('Invalid Path')
  produceMessage(data.topic, info)
}

module.exports = { request }

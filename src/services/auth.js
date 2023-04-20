const { produceMessage } = require('../utils/kafka/producer')

const onFetchModes = async (auth) => {
  // send response to kafka
  produceMessage('auth', auth)
  return 'success'
}

const onInit = async (transactionId) => {
  // send response to kafka
  produceMessage('auth', transactionId)
  return 'success'
}

const onConfirm = async (accessToken) => {
  // send response to kafka
  produceMessage('auth', accessToken)
  return 'success'
}

module.exports = { onFetchModes, onInit, onConfirm }

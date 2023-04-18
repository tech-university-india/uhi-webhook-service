const onFetchModes = async (auth) => {
  // send response to kafka
  console.log('auth', auth)
  return 'success'
}

const onInit = async (transactionId) => {
  // send response to kafka
  console.log('transactionId', transactionId)
  return 'success'
}

const onConfirm = async (accessToken) => {
  // send response to kafka
  console.log('accessToken', accessToken)
  return 'success'
}

module.exports = { onFetchModes, onInit, onConfirm }

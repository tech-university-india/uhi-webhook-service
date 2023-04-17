const onNotify = async (notification) => {
  // send response to kafka
  console.log('notification', notification)
  return 'success'
}

const onRequest = async (transactionId, hiRequest) => {
  // send response to kafka
  console.log('transactionId', transactionId)
  console.log('hiRequest', hiRequest)
  return 'success'
}

const onInit = async (body) => {
  // send response to kafka
  console.log('body', body)
  return 'success'
}

const onConfirm = async (body) => {
  // send response to kafka
  console.log('body', body)
  return 'success'
}

const onFetch = async (body) => {
  // send response to kafka
  console.log('body', body)
  return 'success'
}

module.exports = { onNotify, onRequest, onInit, onConfirm, onFetch }

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


const onAddContexts = async (requestId) => {
  // send response to kafka
  console.log('onAddContexts', requestId)
  return 'success'
}

const onNotifyMessage = async (requestId) => {
  // send response to kafka
  console.log('onNotify', requestId)
  return 'success'
}

const discover = async (requestId) => {
  // send response to kafka
  console.log('discover', requestId)
  return 'success'
}

const discoverInit = async (requestId) => {
  // send response to kafka
  console.log('discoverInit', requestId)
  return 'success'
}

const discoverConfirm = async (requestId) => {
  // send response to kafka
  console.log('discoverConfirm', requestId)
  return 'success'
}

module.exports = { onNotify, onRequest, onInit, onConfirm, onFetch, onAddContexts, onNotifyMessage, discover, discoverInit, discoverConfirm }


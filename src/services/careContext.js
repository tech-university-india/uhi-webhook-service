const onAddContexts = async (requestId) => {
  // send response to kafka
  console.log('onAddContexts', requestId)
  return 'success'
}

const onNotify = async (requestId) => {
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

module.exports = {
  onAddContexts,
  onNotify,
  discover,
  discoverInit,
  discoverConfirm
}

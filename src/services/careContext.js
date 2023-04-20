const { produceMessage } = require('../utils/kafka/producer')

const onAddContext = async (res) => {
  // send response to kafka
  produceMessage('careContext', res)
  return 'success'
}

module.exports = { onAddContext }

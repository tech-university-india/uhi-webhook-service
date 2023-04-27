const requestHandler = require('../services/requestHandler')
const logger = require('../utils/logging')

const webhook = async (req, res) => {
  try {
    const info = {
      headers: req.headers,
      query: req.query,
      body: req.body,
      path: req.baseUrl
    }
    const responseId = info.body.resp?.requestId ?? null

    logger.serverLogger.log('Request ID: ' + responseId)

    await requestHandler.request(info)
    res.status(200).send('OK')
  } catch (error) {
    logger.serverLogger.error(error)
    res.status(400).send(error.message)
  }
}

module.exports = { webhook }

const requestHandler = require('../services/requestHandler')

const webhook = async (req, res) => {
  try {
    const info = {
      headers: req.headers,
      query: req.query,
      body: req.body,
      path: req.baseUrl
    }
    await requestHandler.request(info)
    res.status(200).send('OK')
  } catch (error) {
    res.status(400).send(error.message)
  }
}

module.exports = { webhook }

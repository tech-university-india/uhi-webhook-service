const { request } = require('../services/requestHandler')

const webhook = async (req, res) => {
  try {
    const info = {
      headers: req.headers,
      query: req.query,
      body: req.body,
      path: req.baseUrl
    }
    await request(info)
    res.status(200).send('OK')
  } catch (error) {
    console.log(error)
    res.status(200).send(error.message)
  }
}

module.exports = { webhook }

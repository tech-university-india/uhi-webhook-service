require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const { initProducer } = require('./src/utils/kafka/producer')
const { webhook } = require('./src/controllers/webhook')
const { tokenValidator } = require('./src/middleware/tokenValidate')

app.use(express.json())
app.use(express.text())
app.use(
  cors({
    origin: '*'
  })
)
app.use('*', tokenValidator, webhook)
initProducer().catch(`ErrorMsg: ${console.error}`)

const PORT = process.env.PORT || 9007

app.listen(PORT, () => console.log(`WebHook Service Started on port ${PORT}`))

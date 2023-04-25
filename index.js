require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const { initProducer } = require('./src/utils/kafka/producer')
const { webhook } = require('./src/controllers/webhook')
const { tokenValidator } = require('./src/middleware/tokenValidate')
const logger = require('./src/utils/logging')
app.use(express.json())
app.use(express.text())

app.use(
  cors({
    origin: '*'
  })
)

app.get('/latest/:id', (req, res) => {
  const id = req.params.id
  if (id === 'server') {
    res.sendFile('logs/server.log', { root: __dirname })
  } else {
    res.sendFile('logs/kafka.log', { root: __dirname })
  }
})

app.use('*', tokenValidator, webhook)
initProducer().catch((error) => {
  logger.kafkaLogger.error(`Error in connecting to Kafka ${error}`)
})

const PORT = process.env.PORT || 9007

app.listen(PORT, () => console.log(`WebHook Service Started on port ${PORT}`))

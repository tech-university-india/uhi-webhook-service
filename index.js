require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const { client } = require('./src/utils/redisClient')
const { initProducer } = require('./src/utils/kafka/producer')
const { webhook } = require('./src/controllers/webhook')

app.use(express.json())
app.use(express.text())
app.use(
  cors({
    origin: '*'
  })
)
app.use('*', webhook)
initProducer().catch(console.error)
// app.use('/v0.5/users/auth', authRoutes)
// app.use('/v0.5', dataLinkShareRoutes)

const PORT = process.env.PORT || 9007

app.listen(PORT, () => console.log(`WebHook Service Started on port ${PORT}`))
client()

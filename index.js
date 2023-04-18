require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const authRoutes = require('./src/routes/auth')
const dataLinkShareRoutes = require('./src/routes/dataLinkShare')
const { client } = require('./src/utils/redisClient')

app.use(express.json())
app.use(express.text())
app.use(cors({
  origin: '*'
}))

app.use('/v0.5/users/auth', authRoutes)
app.use('/v0.5', dataLinkShareRoutes)

const PORT = process.env.PORT || 9007

app.listen(PORT, () => console.log(`WebHook Service Started on port ${PORT}`))
client()

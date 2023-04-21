require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const authRoutes = require('./src/routes/auth')
const careContextRoutes = require('./src/routes/careContext')
const dataLinkShareRoutes = require('./src/routes/dataLinkShare')
const { client } = require('./src/utils/redisClient')
const { initProducer } = require('./src/utils/kafka/producer')

app.use(express.json())
app.use(express.text())
// app.use(
//   cors({
//     origin: '*'
//   })
// )

// initProducer()

app.use('/v0.5/users/auth', authRoutes)
app.use('/v0.5', dataLinkShareRoutes)
// app.use('/v0.5/links/link', careContextRoutes)

const PORT = process.env.PORT || 9008

app.listen(PORT, () => console.log(`WebHook Service Started on port ${PORT}`))
client()

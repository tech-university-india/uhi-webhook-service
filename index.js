require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const authRoutes = require('./src/routes/auth')

app.use(express.json())
app.use(express.text())
app.use(cors({
  origin: '*'
}))

app.use('/v0.5/users/auth', authRoutes)

const PORT = process.env.PORT || 9007

app.listen(PORT, () => console.log(`WebHook Service Started on port ${PORT}`))

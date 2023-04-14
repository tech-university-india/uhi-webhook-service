require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(express.text())
app.use(cors({
  origin: '*'
}))

const PORT = process.env.PORT || 9007

app.listen(PORT, () => console.log(`WebHook Service Started on port ${PORT}`))

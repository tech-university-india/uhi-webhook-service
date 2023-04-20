const {
  setKeyValuePairRedis,
  getValueFromKeyRedis
} = require('../utils/redisClient')
const jwt = require('jsonwebtoken')
const { getPublicKey } = require('../utils/fetch')
const jwkToPem = require('jwk-to-pem')

const tokenValidator = async (req, res, next) => {
  const { authorization } = req.headers
  if (authorization) {
    const token = authorization.split(' ')[1]
    getValueFromKeyRedis(token).then(async (value) => {
      if (value) {
        next()
      } else {
        try {
          const key = await getPublicKey()
          const publicKey = jwkToPem(key.keys[0])
          const decoded = jwt.verify(token, publicKey)
          if (!decoded) {
            throw new Error('Invalid token')
          }
          await setKeyValuePairRedis(token, '1')
          next()
        } catch (error) {
          res.send(error.message)
        }
      }
    })
  } else {
    res.status(401).json({ message: 'Unauthorized' })
  }
}

module.exports = { tokenValidator }

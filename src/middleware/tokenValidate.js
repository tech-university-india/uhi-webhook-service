const {setCache, getCache} = require('../utils/mcache');
const jwt = require('jsonwebtoken');
const {getPublicKey} = require('../utils/fetch');
const jwkToPem = require('jwk-to-pem');
const {config} = require('../config/config');

const tokenValidator = async (req, res, next) => {
  if (req.baseUrl === '/v1.0/health-information/data-push') {
    next();
  }
  const {authorization} = req.headers;
  if (authorization) {
    const token = authorization.split(' ')[1];
    const value = getCache(token);
    if (value) {
      next();
    } else {
      try {
        const key = await getPublicKey();
        const publicKey = jwkToPem(key.keys[0]);
        const decoded = jwt.verify(token, publicKey);
        if (!decoded) {
          throw new Error('Invalid token');
        }
        setCache(token, '1', 60 * 1000);
        next();
      } catch (error) {
        res.send(error.message);
      }
    }
  } else {
    res.status(401).json({message: 'Unauthorized'});
  }
};

module.exports = {tokenValidator};

const axios = require('axios')

const getPublicKey = async () => {
  const { data } = await axios.get('https://dev.abdm.gov.in/gateway/v0.5/certs')
  return data
}

module.exports = { getPublicKey }

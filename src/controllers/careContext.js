const careContextServices = require('../services/auth')
const { errorHandlerInRoute } = require('../utils/errors/errorHandler')

const onAddContext = async (req, res) => {
  console.log('inside hook')
  try {
    const response = await careContextServices.onAddContext(req.body)
    console.log(response)
    res.status(200).send(response)
  } catch (error) {
    errorHandlerInRoute(error, req, res)
  }
}

module.exports = { onAddContext }

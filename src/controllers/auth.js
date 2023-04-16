const authServices = require('../services/auth')
const { errorHandlerInRoute } = require('../utils/errors/errorHandler')

const onFetchModes = async (req, res) => {
  const { auth } = req.body
  //   const { authorization } = req.headers
  try {
    const response = await authServices.onFetchModes(auth.modes)
    res.status(200).send(response)
  } catch (error) {
    errorHandlerInRoute(error, req, res)
  }
}

const onInit = async (req, res) => {
  const { auth } = req.body
  try {
    const response = await authServices.onInit(auth.transactionId)
    res.status(200).send(response)
  } catch (error) {
    errorHandlerInRoute(error, req, res)
  }
}

const onConfirm = async (req, res) => {
  const { auth } = req.body
  try {
    const response = await authServices.onConfirm(auth.accessToken)
    res.status(200).send(response)
  } catch (error) {
    errorHandlerInRoute(error, req, res)
  }
}

module.exports = { onFetchModes, onInit, onConfirm }

const authServices = require('../services/auth')
const { errorHandlerInRoute } = require('../utils/errors/errorHandler')

const onFetchModes = async (req, res) => {
  //   const { authorization } = req.headers
  try {
    const response = await authServices.onFetchModes(req.body)
    res.status(200).send(response)
  } catch (error) {
    errorHandlerInRoute(error, req, res)
  }
}

const onInit = async (req, res) => {
  try {
    const response = await authServices.onInit(req.body)
    res.status(200).send(response)
  } catch (error) {
    errorHandlerInRoute(error, req, res)
  }
}

const onConfirm = async (req, res) => {
  try {
    const response = await authServices.onConfirm(req.body)
    res.status(200).send(response)
  } catch (error) {
    errorHandlerInRoute(error, req, res)
  }
}

module.exports = { onFetchModes, onInit, onConfirm }

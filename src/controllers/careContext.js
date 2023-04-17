const careContextService = require('../services/careContext')
const { errorHandlerInRoute } = require('../utils/errors/errorHandler')

const onAddContexts = async (req, res) => {
  const { requestId } = req.body
  try {
    const response = await careContextService.onAddContexts(requestId)
    res.status(200).send(response)
  } catch (error) {
    errorHandlerInRoute(error, req, res)
  }
}

const onNotify = async (req, res) => {
  const { requestId } = req.body
  try {
    const response = await careContextService.onNotify(requestId)
    res.status(200).send(response)
  } catch (error) {
    errorHandlerInRoute(error, req, res)
  }
}

const discover = async (req, res) => {
  const { requestId } = req.body
  try {
    const response = await careContextService.discover(requestId)
    res.status(200).send(response)
  } catch (error) {
    errorHandlerInRoute(error, req, res)
  }
}

const discoverInit = async (req, res) => {
  const { requestId } = req.body
  try {
    const response = await careContextService.discoverInit(requestId)
    res.status(200).send(response)
  } catch (error) {
    errorHandlerInRoute(error, req, res)
  }
}

const discoverConfirm = async (req, res) => {
  const { requestId } = req.body
  try {
    const response = await careContextService.discoverConfirm(requestId)
    res.status(200).send(response)
  } catch (error) {
    errorHandlerInRoute(error, req, res)
  }
}

module.exports = {
  onAddContexts,
  onNotify,
  discover,
  discoverInit,
  discoverConfirm
}

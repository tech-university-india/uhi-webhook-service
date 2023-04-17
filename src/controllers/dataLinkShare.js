const dataLinkShare = require('../services/dataLinkShare')
const { errorHandlerInRoute } = require('../utils/errors/errorHandler')

const onNotify = async (req, res) => {
  const { notification } = req.body
  try {
    const response = await dataLinkShare.onNotify(notification)
    res.status(200).send(response)
  } catch (error) {
    errorHandlerInRoute(error, req, res)
  }
}

const onRequest = async (req, res) => {
  const { transactionId, hiRequest } = req.body
  try {
    const response = await dataLinkShare.onRequest(transactionId, hiRequest)
    res.status(200).send(response)
  } catch (error) {
    errorHandlerInRoute(error, req, res)
  }
}

const onInit = async (req, res) => {
  try {
    const response = await dataLinkShare.onInit(req.body)
    res.status(200).send(response)
  } catch (error) {
    errorHandlerInRoute(error, req, res)
  }
}

const onConfirm = async (req, res) => {
  try {
    const response = await dataLinkShare.onConfirm(req.body)
    res.status(200).send(response)
  } catch (error) {
    errorHandlerInRoute(error, req, res)
  }
}

const onFetch = async (req, res) => {
  try {
    const response = await dataLinkShare.onFetch(req.body)
    res.status(200).send(response)
  } catch (error) {
    errorHandlerInRoute(error, req, res)
  }
}

module.exports = { onNotify, onRequest, onInit, onConfirm, onFetch }

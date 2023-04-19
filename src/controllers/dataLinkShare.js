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

const onAddContexts = async (req, res) => {
  const { requestId } = req.body
  try {
    const response = await dataLinkShare.onAddContexts(requestId)
    res.status(200).send(response)
  } catch (error) {
    errorHandlerInRoute(error, req, res)
  }
}

const onNotifyMessage = async (req, res) => {
  const { requestId } = req.body
  try {
    const response = await dataLinkShare.onNotifyMessage(requestId)
    res.status(200).send(response)
  } catch (error) {
    errorHandlerInRoute(error, req, res)
  }
}

const discover = async (req, res) => {
  const { requestId } = req.body
  try {
    const response = await dataLinkShare.discover(requestId)
    res.status(200).send(response)
  } catch (error) {
    errorHandlerInRoute(error, req, res)
  }
}

const discoverInit = async (req, res) => {
  const { requestId } = req.body
  try {
    const response = await dataLinkShare.discoverInit(requestId)
    res.status(200).send(response)
  } catch (error) {
    errorHandlerInRoute(error, req, res)
  }
}

const discoverConfirm = async (req, res) => {
  const { requestId } = req.body
  try {
    const response = await dataLinkShare.discoverConfirm(requestId)
    res.status(200).send(response)
  } catch (error) {
    errorHandlerInRoute(error, req, res)
  }
}

module.exports = { onNotify, onRequest, onInit, onConfirm, onFetch, onAddContexts, onNotifyMessage, discover, discoverInit, discoverConfirm }

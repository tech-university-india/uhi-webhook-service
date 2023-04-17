const router = require('express').Router()
const dataLinkShare = require('../controllers/dataLinkShare')

// Care-contexts linking

// Data sharing HIP
router.post('/consents/hip/notify', dataLinkShare.onNotify)
router.post('/health-information/hip/request', dataLinkShare.onRequest)

// Data sharing HIU
router.post('/consent-requests/on-init', dataLinkShare.onInit)
router.post('/consents/hiu/notify', dataLinkShare.onConfirm)
router.post('/consents/on-fetch', dataLinkShare.onFetch)

module.exports = router

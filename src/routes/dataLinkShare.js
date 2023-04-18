const router = require('express').Router()
const dataLinkShare = require('../controllers/dataLinkShare')
const tokenValidation = require('../middleware/tokenValidate')

// Care-contexts linking

// Data sharing HIP
router.post('/consents/hip/notify', tokenValidation.tokenValidator, dataLinkShare.onNotify)
router.post('/health-information/hip/request', tokenValidation.tokenValidator, dataLinkShare.onRequest)

// Data sharing HIU
router.post('/consent-requests/on-init', tokenValidation.tokenValidator, dataLinkShare.onInit)
router.post('/consents/hiu/notify', tokenValidation.tokenValidator, dataLinkShare.onConfirm)
router.post('/consents/on-fetch', tokenValidation.tokenValidator, dataLinkShare.onFetch)

module.exports = router

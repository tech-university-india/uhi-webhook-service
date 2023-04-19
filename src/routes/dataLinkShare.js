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

// Care-contexts linking
router.post('/links/link/on-add-contexts', tokenValidation.tokenValidator, dataLinkShare.onAddContexts)
router.post('/patients/status/on-notify', tokenValidation.tokenValidator, dataLinkShare.onNotifyMessage)
router.post('/care-contexts/discover', tokenValidation.tokenValidator, dataLinkShare.discover)
router.post('/links/link/init', tokenValidation.tokenValidator, dataLinkShare.discoverInit)
router.post('/links/link/confirm', tokenValidation.tokenValidator, dataLinkShare.discoverConfirm)

module.exports = router

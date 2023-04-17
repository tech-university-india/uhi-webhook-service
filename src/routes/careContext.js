const router = require('express').Router()
const careContextController = require('../controllers/careContext')

router.post('/links/link/on-add-contexts', careContextController.onAddContexts)
router.post('/patients/status/on-notify', careContextController.onNotify)
router.post('/care-contexts/discover', careContextController.discover)
router.post('/links/link/init', careContextController.discoverInit)
router.post('/links/link/confirm', careContextController.discoverConfirm)

module.exports = router

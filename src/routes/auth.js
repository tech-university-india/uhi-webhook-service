const router = require('express').Router()
const authController = require('../controllers/auth')

router.post('/on-fetch-modes', authController.onFetchModes)
router.post('/on-init', authController.onInit)
router.post('/on-confirm', authController.onConfirm)

module.exports = router

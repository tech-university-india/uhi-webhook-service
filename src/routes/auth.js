const router = require('express').Router()
const authController = require('../controllers/auth')
const tokenValidation = require('../middleware/tokenValidate')

router.post('/on-fetch-modes', tokenValidation.tokenValidator, authController.onFetchModes)
router.post('/on-init', tokenValidation.tokenValidator, authController.onInit)
router.post('/on-confirm', tokenValidation.tokenValidator, authController.onConfirm)

module.exports = router

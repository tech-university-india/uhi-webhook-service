const careContextController = require('../controllers/careContext')
const tokenValidation = require('../middleware/tokenValidate')
const router = require('express').Router()

router.post('/on-add-contexts', tokenValidation.tokenValidator, careContextController.onAddContext)

module.exports = router

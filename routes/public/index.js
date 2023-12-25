const { register, login } = require("../../controllers/loginRegister")

const router = require("express").Router()

router.post('/register', register)
router.post('/', login)

module.exports = router
const express = require('express')
const router = express.Router()

const {loginUser ,registerUser} = require('../controllers/userController')


//user routes
router.post('/login',loginUser)
router.post('/register',registerUser)




module.exports = router
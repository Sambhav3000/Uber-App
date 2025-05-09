const express = require ("express");
const { body } = require ("express-validator");
const userController = require("../controllers/user.controllers")
const authMiddleware = require("../middlewares/auth.middleswares")

const router = express.Router()

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First Name must be at least 3 Characters Long'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 Characters Long')
],
userController.registerUser
)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),   
    body('password').isLength({min:6}).withMessage('Password must be at least 6 Characters Long')   
],
userController.loginUser
)   

router.get('/profile',authMiddleware.authUser,userController.getUserProfile)

router.get('/logout',authMiddleware.authUser,userController.logoutUser)


module.exports = router
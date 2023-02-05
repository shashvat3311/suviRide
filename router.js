const express=require('express')
const router=express.Router();
const verifyToken=require('./validator')
const user_controller=require('./controllers/user.controller')

// **********User Routings are Kept in This Section******************

router.post('/user/Registrations',user_controller.UserRegisteration)

router.post('/user/login',user_controller.userLogin)
//******************************************* */



module.exports=router;
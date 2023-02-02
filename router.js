const express=require('express')
const router=express.Router();
const verifyToken=require('./validator')
const user_controller=require('./controllers/user.controller')

// **********User Routings are Kept in This Section******************

router.post('/user/Registrations',user_controller.UserRegisteration)

//******************************************* */



module.exports=router;
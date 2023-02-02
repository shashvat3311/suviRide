 const{request,response}=require('express')


 require('dotenv').config();

 const verifyToken=(request,response,next)=>{
    try{
        const authorizationHeader=request.headers.authorization;
       
        (authorizationHeader)?
        jwt.verify(token,'anDSV$$$#@@$$%y$efsdSef!#35443523',(error,payload)=>{
        error?response.status(401).send({message:"Please Provide Valid Token"}):next()

            }):response.status(404).send({
                  sucess:false,
                  err_message:"Please Enter Token with Header"
            })
    }
    catch(err){
        response.status(400).send({
            sucess:false,
            err:err
        })
    }
}

module.exports=verifyToken
const router=require("express").Router();
const verify=require('../middleware/middleware');
let {uservalidation}=require('../utils/SignupAuth')

router.post('/admin-register',(req,res)=>{

    uservalidation(req.body,'admin',res)

})

router.post('/country-register',(req,res)=>{

    uservalidation(req.body,'country-ambassador',res)

})

router.post('/organisation-register',(req,res)=>{

    uservalidation(req.body,'organisation',res)

})

router.post('/campus-register',(req,res)=>{

    uservalidation(req.body,'campus-ambassador',res)

})

router.post('/voulenteer-register',(req,res)=>{

    uservalidation(req.body,'voulenteer',res)

})

module.exports=router;
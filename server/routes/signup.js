const router=require("express").Router();
const {verify , verifyOrg}=require('../middleware/middleware');
let { UserValidationByAdmin , UserValidationByOrg}=require('../utils/SignupAuth')

// admin routes for registering

router.post('/admin-register-admin',verify,(req,res)=>{

    UserValidationByAdmin(req.body,'admin',res,req.user)

})
router.post('/admin-register-ca',verify,(req,res)=>{

    UserValidationByAdmin(req.body,'campus-ambassador',res,req.user)

})

router.post('/admin-register-org',verify,(req,res)=>{

    UserValidationByAdmin(req.body,'organisation',res,req.user)
})

// organisation routes for registering

router.post('/org-register-ca',verifyOrg,(req,res)=>{

    UserValidationByOrg(req.body,'campus-ambassador',res,req.user)

})

//--------------------------------------------below not needed now 




router.post('/country-register',(req,res)=>{

    uservalidation(req.body,'country-ambassador',res)

})

router.post('/organisation-register',(req,res)=>{

    uservalidation(req.body,'organisation',res,req,user)

})

router.post('/campus-register',(req,res)=>{

   res.send('hi')

})

router.post('/voulenteer-register',(req,res)=>{

    uservalidation(req.body,'voulenteer',res)

})

module.exports=router;
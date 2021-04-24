const router=require("express").Router();
const mongoose=require('mongoose');
const User=mongoose.model("User");
const Organisation=mongoose.model("Organisation");
const {finduser,findorganisation}=require("../utils/Users")
const {verify}=require('../middleware/middleware');


router.get('/dashboard',verify,(req,res)=>{
    res.json({user:req.user});
})

router.get('/get-campus-user',verify,(req,res)=>{
  
    finduser('campus-ambassador',req.user,res);
})

router.get('/get-organisation',(req,res)=>{
  
    findorganisation('organisation',res);
})

module.exports=router;
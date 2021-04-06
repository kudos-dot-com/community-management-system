const express=require("express");
const router=express.Router();
const mongoose=require('mongoose');
const User=mongoose.model("User");
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken')
const {JWT_SECRET}=require('../config');
const verify=require('../middleware');

router.get("/dashboard",verify,(req,res)=>{
    res.send("hello user");
})
router.post("/signin",(req,res)=>{
const {email,password,name} = req.body;
if(!email || !password)
{
    res.status(422).json({err:"incomplete fields"});
}
User.findOne({email:email})
.then(getuser=>{
    if(!getuser)
    {
        return res.status(422).json({err:"user doesn't exist wrong email"});
    }
    bcrypt.compare(password,getuser.password)
    .then(status=>{
        if(status)
        {
            const token=jwt.sign({_id:getuser._id},JWT_SECRET)
            res.json({token:token});
        }
        else{
            return res.status(422).json({err:"password wrong"});
        }
    })
    .catch(err=>{
        res.json({err:err})
    })
   
})
.catch(err=>{
    res.json({err:err})
})
})

module.exports=router;
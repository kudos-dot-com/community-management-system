const express=require("express");
const router=express.Router();
const mongoose=require('mongoose');
const User=mongoose.model("User");
const bcrypt=require('bcryptjs');

router.post("/signup",(req,res)=>{
const {email,password,name} = req.body;
console.log(email + password +name);
if(!email || !password)
{
    res.status(422).json({err:"incomplete fields"});
}
User.findOne({email:email})
.then(getuser=>{
    if(getuser)
    {
        return res.status(422).json({err:"user already exist"});
    }
    bcrypt.hash(password,12)
    .then(hashed=>{
        const user=new User({
            email:email,
            password:hashed,
            name:name
        })
        user.save()
        .then(response=>{
            res.json({success:"saved successfully"});
        })
        .catch(err=>{
            res.json({err:err})
        })
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
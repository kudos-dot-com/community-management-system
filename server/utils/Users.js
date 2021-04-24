const express=require('express');
const mongoose=require('mongoose');
const Task=mongoose.model('Task');
const User=mongoose.model("User");
const Organisation=mongoose.model("Organisation");
const verify=require('../middleware/middleware');

const finduser=(role,user,res)=>{
    User.find({addedByAdmin:user._id})
    .sort({createdAt:-1 })
    .then(data=>{
        res.status(200).json({success:data})
    })
    .catch(err=>{
        res.status(403).json({err:err})
    })    
}

const findorganisation=(role,res)=>{
    Organisation.find({role:role})
    .sort({createdAt:-1 })
    .then(data=>{
        res.status(200).json({success:data})
    })
    .catch(err=>{
        res.status(403).json({err:err})
    })    
}

module.exports={
    finduser,
    findorganisation
}

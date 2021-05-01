// organisation task
const express=require('express');
const mongoose=require('mongoose');
const OrgTask=mongoose.model('OrgTask');
const verify=require('../middleware/middleware');

const addTask=(req,role,res,userdets)=>{

console.log(role);
    if(role==='organisation')
    {
        const {title,description,points}=req.body;

        if(!title || !description || !points)
        {
            return res.json({success:"please fill all the fields"})
        }        
            
          const task=new OrgTask({
            title,
            description,
            points,
            org:userdets,
            role
        });

        task.save()
        .then(response=>{
            res.status('200').json({success:"your task has been posted",task:response})
        })
        .catch(err=>{
            res.status("422").json({err:err})
        })
    }

    if(role==='campus-ambassador')
    {
        const {title,description,points,media,addedBy}=req.body;

        if(!title || !description || !points || !media)
        {
            return res.json({success:"please fill all the fields"})
        }
   
        task=new OrgTask({
            title,
            description,
            points,
            media,
            role,
            user:userdets,
            task_id:userdets.addedByOrg
        });
        
        task.save()
        .then(response=>{
            res.status('200').json({success:"your task has been posted",task:response})
        })
        .catch(err=>{
            res.status("422").json({err:err})
        })
    } 
}


// get the tasks

const fetchTask=(req,role,res,user)=>{
  
    console.log(user);
    if(role==='organisation'){
    OrgTask.find({org:user.addedByOrg})
    .sort({createdAt:-1 })
    // .populate("user")
    .then(response=>{
        res.json({success:response})
    })
    .catch(err=>{
        res.json({err:err})
    })
    }
    else if(role==='campus-ambassador')
    {
        OrgTask.find({task_id:user._id,role:role})
        .sort({createdAt:-1 })
        .populate("user")
        .then(response=>{
            res.json({success:response})
        })
        .catch(err=>{
            res.json({err:err})
        })  
    }
}

const OrgFetchTask=(req,res,user)=>{
    //   const {addedBy}=req.body;
        OrgTask.find({task_id:user._id})
        .sort({createdAt:-1 })
        // .populate("user")
        .then(response=>{
            res.json({success:response})
        })
        .catch(err=>{
            res.json({err:err})
        })  
}

const findTask=(user,role,res)=>{
    
    OrgTask.find({org:user._id})
    .sort({createdAt:-1 })
    // .populate("user")
    .then(response=>{
        res.json({success:response})
    })
    .catch(err=>{
        res.json({err:err})
    })
}

const updateTask=(req,role,res)=>{
    
    const {_id,title}= req.body;

    Task.findOne({user:_id,title:title})
    .then(response=>{
        console.log(response);
        Task.findByIdAndUpdate(response._id,{"status":"approved","PointsGained":`${response.points}`})
        .then((data)=>{
        res.json({success:data})
        })
        .catch(err=>{
        res.json({err:err})     
        })
    })
    .catch(err=>{
        res.json({err:err})
    })
}

module.exports={
    addTask,
    fetchTask,
    findTask,
    updateTask,
    OrgFetchTask   
}
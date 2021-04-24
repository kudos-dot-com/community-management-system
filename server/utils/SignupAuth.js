const router=require("express").Router();
const mongoose=require('mongoose');
const User=mongoose.model("User");
const Organisation=mongoose.model("Organisation");
const bcrypt=require('bcryptjs');

// admin add user
const UserValidationByAdmin=(user,role,res,userdets)=>{
if(role==="campus-ambassador")
{
    campusSignup(user,role,userdets,res,'admin')
}
else if(role==="organisation")
{
    orgSignup(user,role,userdets,res)
}

}
//organisation add user

const UserValidationByOrg=(user,role,res,userdets)=>{
    if(role==="campus-ambassador")
    {
        campusSignupByOrg(user,role,userdets,res,'organisation')
    }
  
}

const campusSignup=(user,role,userdets,res,addedby)=>{
    const {email,password,name,dob,number,state,country,pin,residence,city} = user;
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
                email,
                addedByAdmin:userdets._id,
                password:hashed,
                name,
                dob,
                number,
                state,
                country,
                pin,
                residence,
                city,
                role
            })
        user.save()
        .then(response=>{
            res.json({success:"you are successfully registered"});
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
}

// organisation adds user
const campusSignupByOrg=(user,role,userdets,res,addedby)=>{
    const {email,password,name,dob,number,state,country,pin,residence,city} = user;
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
                email,
                addedByOrg:userdets,
                password:hashed,
                name,
                dob,
                number,
                state,
                country,
                pin,
                residence,
                city,
                role
            })
        user.save()
        .then(response=>{
            res.json({success:"you are successfully registered"});
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
}

// admin adds organisation
const orgSignup=(user,role,userdets,res)=>{
    const { password,
        email,
        name,
        website,
        number,
        state,
        country,
        type,
        description,
        scope,
        city
        } = user;
    
    if(!email || !password)
    {
        res.status(422).json({err:"incomplete fields"});
    }
    Organisation.findOne({email:email})
    .then(getuser=>{
        if(getuser)
        {
            return res.status(422).json({err:"user already exist"});
        }
        bcrypt.hash(password,12)
        .then(hashed=>{
            const Org=new Organisation({
                email,
                name,
                website,
                number,
                state,
                country,
                type,
                description,
                scope,
                city,
                password:hashed,
                role
            })
            Org.save()
            .then(response=>{
                res.json({success:"you are successfully registered",res:response});
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
    }

module.exports={
    UserValidationByAdmin,
    UserValidationByOrg
};
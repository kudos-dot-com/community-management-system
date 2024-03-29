// this collection is for the campus ambasador registed by admin
const mongoose=require('mongoose');
const {ObjectId}=mongoose.Schema.Types;
const userSchema= new mongoose.Schema({
    status:{
        type:String,
        default:'Active',
        required:false
    },
    addedByAdmin:{
        type:String,
        required:false
    },
    addedByOrg:{
        required:false,
        type:ObjectId,
        ref:"Organisation"
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    pin:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    residence:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        enum:["campus-ambassador","voulenteer","country-ambassador","organisation","admin"]
    }
},
{
    timestamps:true
}
);

mongoose.model('User',userSchema);
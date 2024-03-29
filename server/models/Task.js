const mongoose=require('mongoose');
const {ObjectId}=mongoose.Schema.Types;
const TaskSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    media:{
        type:String,
        required:false
    },
    points:{
        type:String,
        default:"0",
        required:true
    },
    PointsGained:{
        type:String,
        default:"0",
        required:true
    },
    status:{
       type:"string",
       default:"not approved",
       required:false 
    },
   role:{
        type:String,
        required:true,
        enum:["campus-ambassador","voulenteer","country-ambassador","organisation","admin"]
    },
    user:{
        required:false,
        type:ObjectId,
        ref:"User"
    }
},
{
    timestamps:true
}
);

mongoose.model('Task',TaskSchema);
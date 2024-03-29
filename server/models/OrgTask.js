const mongoose=require('mongoose');
const {ObjectId}=mongoose.Schema.Types;
const OrgTaskSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
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
    task_id:{
        type:String,
        required:false
    },
   role:{
        type:String,
        required:true,
        enum:["campus-ambassador","voulenteer","country-ambassador","organisation","admin"]
    },
    org:{
        required:false,
        type:ObjectId,
        ref:"Organisation"
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

mongoose.model('OrgTask',OrgTaskSchema);
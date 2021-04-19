const router=require("express").Router();
let {addTask , fetchTask, findTask , updateTask }=require('../utils/SetTask') //functions for different operartion
const verify=require('../middleware/middleware'); //used to verify that token is provided or not


// adding new task routes 
router.post('/admin-add-task',verify,(req,res)=>{

    addTask(req,'admin',res,req.user) 

})


router.post('/ca-add-task',verify,(req,res)=>{

    addTask(req,'campus-ambassador',res,req.user)

})

 
router.post('/voulenteer-add-task',verify,(req,res)=>{

    addTask(req,'voulenteer',res,req.user)

})
// ---------------------------------------------------------------------------------------

// get respective tasks routes
router.get('/get-admin-task',(req,res)=>{

    fetchTask('admin',res)
})

router.get('/get-ca-task',(req,res)=>{

    fetchTask('campus-ambassador',res)
})
// --------------------------------------------------------------------------------------

// finding specific routes
router.get('/ca-find-task',verify,(req,res)=>{

   findTask(req.user,'campus-ambassador',res)

})

router.put('/ca-update-task',verify,(req,res)=>{

    updateTask(req,'campus-ambassador',res)
 
})


module.exports=router;
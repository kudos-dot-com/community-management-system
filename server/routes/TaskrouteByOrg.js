const router=require("express").Router();
let {addTask , 
    fetchTask,
    OrgFetchTask,     
    findTask , 
    updateTask }=require('../utils/SetTaskByOrg') //functions for different operartion

const {verify , verifyOrg}=require('../middleware/middleware'); //used to verify that token is provided or not


// adding new task routes 
router.post('/org-add-task',verifyOrg,(req,res)=>{

    addTask(req,'organisation',res,req.user) 

})


router.post('/ca-add-orgtask',verify,(req,res)=>{

    addTask(req,'campus-ambassador',res,req.user)

})

 
router.post('/voulenteer-add-task',verify,(req,res)=>{

    addTask(req,'voulenteer',res,req.user)

})
// ---------------------------------------------------------------------------------------

// get respective tasks routes
router.get('/get-org-task',verify,(req,res)=>{

    fetchTask(req,'organisation',res,req.user)
})

router.get('/get-ca-orgtask',verifyOrg,(req,res)=>{

    fetchTask(req,'campus-ambassador',res,req.user)
})
// <-------------------------------------------------------------------------------------->

// finding specific routes
router.get('/ca-find-task',verify,(req,res)=>{

   findTask(req.user,'campus-ambassador',res)

})
router.get('/org-find-task',verifyOrg,(req,res)=>{

    findTask(req.user,'organisation',res)
 
 })

router.put('/ca-update-task',verify,(req,res)=>{

    updateTask(req,'campus-ambassador',res)
 
})


module.exports=router;
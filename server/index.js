const app= require('express')();
const express=require('express');
const mongoose=require('mongoose');
const {MONGO_URI,PORT}=require('./config');
const cors=require("cors");
require('./models/User');
require('./models/Organisation');
require('./models/Task')
require('./models/OrgTask');

const port=process.env.PORT || PORT;

app.use(cors())
app.use(require('express').json());

//Routes;
const SignUpRoute = require('./routes/signup');
const SignInRoute = require('./routes/login');
const DashBoardRoute = require('./routes/dashboard');
const TaskRoute = require('./routes/Taskroute');
const OrgTaskRoute = require('./routes/TaskrouteByOrg');

//routes middle ware
app.use('/api/users', SignUpRoute);
app.use('/api/users', SignInRoute);
app.use('/api/users', DashBoardRoute);
app.use('/tasks', TaskRoute);
app.use('/Orgtasks', OrgTaskRoute);

//routes middle ware
app.use('/api/users', SignUpRoute);
app.use('/api/users', SignInRoute);
app.use('/api/users', DashBoardRoute);
app.use('/tasks', TaskRoute);

mongoose.connect(process.env.MONGO_URI || MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>console.log("DataBase Connected"))
.catch(err => console.log(err));

if(process.env.NODE_ENV === 'production')
{
    app.use(express.static('../build'))
}

app.listen(port,()=>{
    console.log(`server running at port ${port}`);
})


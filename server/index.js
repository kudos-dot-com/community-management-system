const app= require('express')();
const express=require('express');
const mongoose=require('mongoose');
const {MONGO_URI,PORT}=require('./config');
const cors=require("cors");
require('./models/User');
require('./models/Task')
const port=process.env.PORT || PORT;

app.use(cors())
app.use(require('express').json());

//routes middle ware
app.use('/api/users',require('./routes/signup'));
app.use('/api/users',require('./routes/login'));
app.use('/api/users',require('./routes/dashboard'));
app.use('/tasks',require('./routes/Taskroute'));


console.log(MONGO_URI)

mongoose.connect(process.env.MONGO_URI || MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
mongoose.connection.on('connected',()=>{
    console.log("database connected");
})
mongoose.connection.on('err',()=>{
    console.log("error connecting to database",err);
})

if(process.env.NODE_ENV === 'production')
{
    app.use(express.static('../build'))
}

app.listen(port,()=>{
    console.log(`server running at port ${port}`);
})


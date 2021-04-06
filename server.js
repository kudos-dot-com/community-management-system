const bodyParser = require('body-parser');

const app= require('express')();
const port='3001';
var bodyparser=require("body-parser");
const mongoose=require('mongoose');
const {MONGO_URI}=require('./config');
const cors=require("cors");

require('./models/User');
app.use(cors())
app.use(bodyparser.json());
app.use(require('express').json());

app.use(require('./auth/signup'));
app.use(require('./auth/login'));


mongoose.connect(MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
mongoose.connection.on('connected',()=>{
    console.log("database connected");
})
mongoose.connection.on('error',()=>{
    console.log("error connecting to database",error);
})

app.listen(port,()=>{
    console.log(`server running at port ${port}`);
})


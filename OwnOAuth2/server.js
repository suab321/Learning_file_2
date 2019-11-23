const express=require('express');
const session=require('express-session');
const sessionStorage=require('connect-mongo')(session);
const mongoose=require('mongoose');
const bodyParser=require("body-parser");
const cors=require('cors');

const {OwnRoutes}=require('./ownRoutes/routes');



require('dotenv').config();


const app=express();


const sessionObj=session({
    secret:"suab123",
    cookie:{maxAge:1000*60*60*2,httpOnly:true,secure:false},
    resave:false,
    saveUninitialized:false,
    store:new sessionStorage({mongooseConnection:mongoose.connection})
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(sessionObj);


app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','http://localhost:3000');
    res.header('Access-Control-Allow-Credentials',true);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
    res.header("Access-Control-Allow-Credentials","true");
    res.header("Access-Control-Allow-Methods","GET,POST,PUT,DELETE")
    next();
});



app.use('/own',OwnRoutes);

app.get('/logout',(req,res)=>{
    if(req.session.user){
        req.session.user=undefined;
        req.session.userID=undefined;
    }
    res.status(200).json();
})

app.get('/user',(req,res)=>{
    console.log(req.session)
    if(req.session.user!==undefined)
        res.status(200).json({token:req.session.user});
    else
        res.status(401).json("no one");
})

app.listen(3002||process.env.PORT);

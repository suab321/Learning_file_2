const express=require('express');
const session=require('express-session');
const mongoose=require('mongoose');
const mongoStore=require('connect-mongo')(session);
const bodyParser=require('body-parser');
const passport=require('passport');
const cors=require('cors');
const socket=require('socket.io');





const app=express();

//importing developer made modules//
const {frontURL}=require('./urk')
const {User}=require('./Database/db');
const {authentication}=require('./authentication/route');
const {connection}=require('./socket')
//importing ends//

//session object//
const sessionObj=session({
    secret:"abhinav_is_king",
    saveUninitialized:false,
    resave:false,
    store:new mongoStore({mongooseConnection:mongoose.connection}),
    cookie:{
        maxAge:1000*60*60*5,
        httpOnly:true
    }
})
//sessionObj ends//

//middleware used by our express instances//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(sessionObj);
app.use(passport.initialize());
app.use(passport.session());
require('./authentication/config');


app.use(cors({
    credentials:true,
    origin:frontURL
}));
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow_Origin',frontURL);
    res.setHeader('Access-Control-Allow-Credentials',true);
    res.setHeader('Access-Control-Allow-Headers','Origin,X-Requested-With,Accept,Content-Type');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
    next();
})

app.use('/authentication',authentication)
//middleware used by our express instances ends//

const listen=app.listen(process.env.PORT||3002);

app.get('/isLoggedIn',(req,res)=>{
    console.log(req.session.user);
    if(req.session.user!==undefined)
        res.status(200).json({name:req.session.name,userId:req.session.user});
    else
        res.status(401).json({ok:"okay"});
})

//socket connection//

let io=socket(listen);

io.use((socket,next)=>{
    // console.log(socket.handshake);
    sessionObj(socket.request,socket.request.res,next);
    // console.log(socket.request.session);
});
connection(io);


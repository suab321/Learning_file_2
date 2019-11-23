const router=require('express').Router();

const {generateToken,decodeToken}=require('../jwt/jwToken');
const {User,Project}=require("../database/db");

router.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','http://localhost:3000');
    next();
})

require('dotenv').config();

function Verify(req,res,next){
    console.log(req.token);
    console.log(req.session.userID);
    if(req.session.userID===req.token)
        next();
    else
        res.status(401).send("Not a valid user 2");
}

function Validate(req,res,next){
    const token=req.headers['authorization'].split(' ')[1];
    const data=decodeToken(token,process.env.jwtSecret);
    if(data){
        req.token=data.user;
        next();
    }
    else
        res.status(401).send("Not a valid user 1");
}

router.post('/login',(req,res)=>{
    const db=new User;
    db.username=req.body.username;
    db.password=req.body.password;
    db.save().then(user=>{
        req.session.userID=user._id;
        req.session.user=generateToken(user._id,process.env.jwtSecret);
        res.status(200).send(req.session.user);
    }).catch(err=>{
        res.status(400).send("something bad happend");
    })
})

router.post('/createProject',[Validate,Verify],(req,res)=>{
    const clientID=generateToken(req.token,process.env.clientID);
    const clientSecret=generateToken(req.token,process.env.clientSecret);
    const db=new Project;
    db.userID=req.token;
    db.clientID=clientID;
    db.clientSecret=clientSecret;
    db.redirectURL=req.body.redirectURL;
    db.save().then(user=>{
        console.log(user)
        res.status(200).json("created");
    }).catch(err=>{
        res.status(400).json(err);
    })
})

router.get('/users',(req,res)=>{
    User.find({}).then(users=>{
        res.status(200).json(users);
    })
})

module.exports={
    OwnRoutes:router
}
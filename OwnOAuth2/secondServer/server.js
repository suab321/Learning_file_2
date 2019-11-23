const express=require('express');
const request=require('request');
const cors=require('cors');
const bodyParser=require('body-parser');
const session=require('express-session');
const router=express.Router();
const crypto=require('crypto');

console.log(crypto.randomBytes(48).toString('base64'));

const app=express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({
    secret:"suab",
    resave:false,
    saveUninitialized:false,
    cookie:{
        httpOnly:true,
        maxAge:null
    }
}));
// app.use(cors());
router.use(cors({
    origin:'http://localhost:3000',
    credentials:true
}));

app.use("/redirect",router);


function abhi(req,res,next){
    res.header('Access-Control-Allow-Origin','http://localhost:3001')
    res.header('Access-Control-Allow-Credentials',true);
    next();
}

app.get('/login',(req,res)=>{
     res.redirect('http://localhost:3000/accounts');
});

app.get('/user',[abhi],(req,res)=>{
    // console.log(req.session.user);
    res.json(req.session);
});

app.post('/redirect',(req,res)=>{
    req.session.user=req.body.name;
    res.send(req.session.user);
});

app.listen(3003);
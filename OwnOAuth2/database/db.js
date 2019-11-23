const mongoose=require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.dataBaseURL,(err,success)=>{
    if(err)
        console.log(err);
    else
        console.log("Connected");
});

const UserSchema=new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true},
});

const ProjectSchema=new mongoose.Schema({
    userID:{type:String,required:true,unique:true},
    clientID:{type:String,required:true},
    clientSecret:{type:String,required:true},
    redirectURL:{type:String,required:true}
});

const User=mongoose.model('User',UserSchema);
const Project=mongoose.model("Project",ProjectSchema);

module.exports={
    User,
    Project
}


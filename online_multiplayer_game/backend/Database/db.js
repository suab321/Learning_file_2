require('dotenv').config();
const {mongodb}=require('../urk')


const mongoose=require('mongoose');

mongoose.connect(process.env.DatabaseConnection,(err=>{
    if(err)
        console.log(err);
}));

const UserSchema=new mongoose.Schema({
    name:String,
    totalMatches:Number,
    totalWin:Number,
    totalLoss:Number,
    totalDraw:Number,
    social_id:String
})
const UserModel=mongoose.model('User_Table',UserSchema);

module.exports={
    User:UserModel
}
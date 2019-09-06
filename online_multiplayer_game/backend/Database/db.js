require('dotenv').config();

const mongoose=require('mongoose');
const ConnectionString=(String)(process.env.DatabaseConnection);

mongoose.connect("mongodb://127.0.0.1/online_game",(err=>{
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
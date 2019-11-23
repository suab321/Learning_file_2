const jwt=require('jsonwebtoken');

require('dotenv').config();

function generateToken(data,key){
    try{
        const token=jwt.sign({user:data},key);
        return token;
    }catch(err){
        return 0;
    }
}

function decodeToken(token,key){
    try{
        const data=jwt.verify(token,key);
        return data;
    }catch(err){
        return 0;
    }
}

module.exports={
    generateToken,
    decodeToken
}
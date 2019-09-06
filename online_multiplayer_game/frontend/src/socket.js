const io=require('socket.io-client');
const {backendURL}=require('./url')

let socket=io(`${backendURL}/tictactoe`,{forceNew:true});
socket.emit("user_connected",{msg:"hello"});

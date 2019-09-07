const io=require('socket.io-client');
const {backendURL}=require('./url')

let socket=io(`${backendURL}/${'tictactoe'}`,{forceNew:true});

socket.on('OnlineUsers',data=>console.log(data));


function ConnectUser(){
    socket.emit('user_connected',{msg:'hello'});
}

function disconnectSocket(){
    socket.emit('disconnctSocket');
}

function getOnlineUsers(game){
    socket.emit('getUsers')
}



module.exports={
    ConnectUser,
    getOnlineUsers
}
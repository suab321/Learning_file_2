const io=require('socket.io-client');
const {backendURL}=require('./url')

var socket=io(`${backendURL}/${'tictactoe'}`,{forceNew:true});


// socket.on('OnlineUsers',data=>console.log(data));


function ConnectUser(){
    socket.emit('user_connected',{msg:'hello'});
}

function disconnectSocket(){
    socket.emit('disconnectSocket',{msg:'h'});
}

function getOnlineUsers(){
    socket.emit('getUsers');
}



module.exports={
    socket,
    ConnectUser,
    getOnlineUsers,
    disconnectSocket
}
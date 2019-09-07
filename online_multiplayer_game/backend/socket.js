
//developer made imports//
const {setValue,Onlineusers,deleteConnection}=require('./redisCommands');
//developer made imports

var Online_users=[];



function connection(io){
    let ttt=io.of('/tictactoe');
    ttt.on('connection',(socket)=>{
        if(socket.request.session.user!==undefined){
            
            //listening when a new users connects//
            socket.on("user_connected",async(msg)=>{
                const data={namespace:socket.nsp.name,socket_id:socket.id,user_id:socket.request.session.user,name:socket.request.session.name};
                await setValue(data);
                Online_users=await Onlineusers();
                console.log(Online_users);
            })
            //listenting when a user disconnects//
            socket.on('disconnectSocket',async()=>{
                console.log("disconnect");
                deleteConnection(socket.request.session.user);
                Online_users=await Onlineusers();
                io.of('tictactoe').emit('OnlineUsers',Online_users);
            })

            socket.on('getUsers',()=>{
                io.of('tictactoe').emit('OnlineUsers',Online_users);
            })
        }
        else
            socket.disconnect();
    })
}







module.exports={
    connection
}
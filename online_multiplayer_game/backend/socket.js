
//developer made imports//
const {setValue,Onlineusers,deleteConnection}=require('./redisCommands');
//developer made imports

var connected_socket;
var Online_users=[];



function connection(io){
    let ttt=io.of('/tictactoe');
    ttt.on('connection',(socket)=>{
        if(socket.request.session.user!==undefined){
            connected_socket=socket;
            
            //listening when a new users connects//
            connected_socket.on("user_connected",async(msg)=>{
                console.log(msg);
                // console.log("users are "+JSON.stringify(users));
                const data={namespace:connected_socket.nsp.name,socket_id:connected_socket.id,user_id:connected_socket.request.session.user,name:connected_socket.request.session.name};
                setValue(data);
                Online_users=await Onlineusers();               
            })
            //listenting when a user disconnects//
            connected_socket.on('disconnctSocket',()=>{
                console.log("yes");
                deleteConnection(connected_socket.request.session.user,connected_socket.id);
            })

            connected_socket.on('getUsers',()=>{
                console.log(Online_users);
                // console.log();
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
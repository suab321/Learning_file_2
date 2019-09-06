
//developer made imports//
const {setValue,Onlineusers,getAll}=require('./redisCommands');
//developer made imports

var connected_socket;

// const hashTableName='connectedSockets';

// var clients=[];

function connection(io){
    let ttt=io.of('/tictactoe');
    ttt.on('connection',socket=>{
        if(socket.request.session.user!==undefined){
            // console.log(socket.request.session);
            connected_socket=socket;
            // console.log(socket.nsp.name);
            connected_socket.on("user_connected",msg=>{
                console.log(msg);
                const data={namespace:connected_socket.nsp.name,socket_id:connected_socket.id,user_id:connected_socket.request.session.user};
                setValue(data);
                // getValue(hashTableName,connected_socket.request.session.user);
                // getAll(`${connected_socket.request.session.user}`);
                Onlineusers()
                // getAll('5d6d719984a2d218f6a5344d');
            })
        }
        else
            socket.disconnect();
    })
}







module.exports={
    connection
}
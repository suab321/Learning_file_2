
//developer made imports//
const {setValue,Onlineusers,deleteConnection,getUser}=require('./redisCommands');
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
                io.of('tictactoe').emit('OnlineUsers',{users:Online_users});
            })
            //socket which listens for event of getUsers from client//
            socket.on('getUsers',()=>{
                io.of('tictactoe').emit('OnlineUsers',{users:Online_users});
            })
            //socket event for challenge events//
            //socket trigger when someone challenges you//
            socket.on('Challenge',async data=>{
                let x=await getUser(data.userId);
                io.of('tictactoe').to(`${data.user.socket_id}`).emit('ChallengeRequest',{Challenger:x,Challenged:data.user});
            })
            //socket trigger when you accept the challenge//
            socket.on('ChallengeAccepted',data=>{
                io.of('tictactoe').to(data.Challenged.socket_id).emit("AcceptedChallenge",{data,sign:'o'});
                io.of('tictactoe').to(data.Challenger.socket_id).emit("AcceptedChallenge",{data,sign:'x'});
            });
            //When a challenge is rejected//
            socket.on('ChallengeRejected',data=>{
                io.of('tictactoe').to(data.Challenged.socket_id).emit("RejectedChallenge",data);
                io.of('tictactoe').to(data.Challenger.socket_id).emit("RejectedChallenge",data);
            });
            //joinig room of two connection who accepted the challenge//
            socket.on('JoinAccepted',room=>{
                socket.join(room);
                console.log()
            })
            //socket event for challenge events//

            //socket events while playing games//
            //socket when a user play a move//
            socket.on("MoveByMe",data=>{
                console.log(data);
                io.of('tictactoe').to(data.room).to(data.Challenger.socket_id).emit('MoveFromOpp',data.block);
            })
        }
        else
            socket.disconnect();
    })
}


module.exports={
    connection
}
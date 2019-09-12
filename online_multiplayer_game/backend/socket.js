
//developer made imports//
const {setValue,Onlineusers,deleteConnection,getUser,createRoom,DeleteGamerFromRoom}=require('./redisCommands');
//developer made imports

var Online_users=[];
const redisAdapter=require('socket.io-redis');


function connection(io){
    // io.adapter(redisAdapter)

    let ttt=io.of('/tictactoe');
    ttt.on('connection',(socket)=>{
        if(socket.request.session.user!==undefined){
            //listening when a new users connects//
            socket.on("user_connected",async(msg)=>{
                const data={namespace:socket.nsp.name,socket_id:socket.id,user_id:socket.request.session.user,name:socket.request.session.name};
                await setValue(data);
                Online_users=await Onlineusers();
                // console.log(Online_users);
            })
            //listenting when a user disconnects//
            socket.on('disconnectSocket',async()=>{
                // console.log("disconnect");
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
            socket.on('ChallengeAccepted',async data=>{
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
            })
            //socket event for challenge events//

            //socket events while playing games//
            //socket when a user play a move//
            socket.on("MoveByMe",data=>{
                // console.log(data);
                io.of('tictactoe').to(data.Challenger.socket_id).emit('MoveFromOpp',{block:data.block,sign:data.sign,Challenger:data.Challenger});
            });
            //when two connection enters a game//
            socket.on('IntoGame',async data=>{
                console.log("Into game "+socket.request.session.user);
                let x=await deleteConnection(socket.request.session.user);
            })
            //Scoket has entered the arena//
            socket.on('InGame',async data=>{

                // console.log("In game "+JSON.stringify(data));
                let x=await createRoom(data.room,socket.request.session.user);
                io.of('tictactoe').to(data.data.socket_id).emit('OpponentActive',{msg:'oppoenent is active'});
            })
            //checking if the opponent is active//
            // socket.on('isOppoActive',async data=>{
            //     console.log("Checking if opponenet is active "+data.userId);
            //     let x=await checkInRoom(data.room,data.userId);
            //     if(x===1){
            //         socket.emit('OppoDeactive',{msg:'Opponent is offline'});
            //     }
            //     else
            //         socket.emit('OpponentActive',{msg:'oppoenent is active'});
            // })
            //when a user leaves the game window socket will be disconnected//
            socket.on('DisconnectFromGame',async data=>{
                console.log("When Disconnect from game "+socket.request.session.user);
                let x=await DeleteGamerFromRoom(data.room,data.userId);
                io.of('tictactoe').to(data.data.socket_id).emit('OppoDeactive',{msg:'Opponent is offline'});
            })


            //when a socket disconnects//
            socket.on('disconnect',async data=>{
                let x=await deleteConnection(socket.request.session.user);
                Online_users=await Onlineusers();
                io.of('tictactoe').emit("OnlineUsers",{users:Online_users});
            })
        }
        else
            socket.disconnect();
    })
}


module.exports={
    connection
}
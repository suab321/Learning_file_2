const redis=require('redis');
const {redisURL}=require('./urk')

const client=redis.createClient({host:redisURL.host,port:redisURL.port});

client.on('connect',()=>{console.log("redis server connected")});
client.on('error',(err)=>{console.log(err)})

const OnlineUserSet='Online_users';

//function to get all the socket connections//
function Onlineusers(){
    return new Promise((reslove,reject)=>{
        client.smembers(OnlineUserSet,async(err,reply)=>{
            var users=[];
            for(const item of reply){
                let data=await getAll(item);
                users.push(data);
            }
            reslove(users);
        });
    });
}
//function ends//


//function to store new socket connections//
function setValue(value){
    return new Promise((resolve,reject)=>{
        client.sadd(OnlineUserSet,value.user_id,(err,reply)=>{
            if(err)
                console.log();
            else
                console.log();
        });
        client.hmset(value.user_id,[
            'namespace',value.namespace,
            'user_id',value.user_id,
            'socket_id',value.socket_id,
            'name',value.name
        ],(err,reply)=>{
            if(err)
                reject(err);
            else
                resolve(reply);
        });
    })
}
//function ends//


//function to get users socket data by user_id
function getAll(key){
    return new Promise((resolve,reject)=>{
        client.hgetall(key,(err,reply)=>{
            if(err)
                reject(err);
            else{
                // console.log(reply);
               resolve(reply)
            }
        });
    })
}
//function ends//


//function to delete a socket when it gets disconnected//
function deleteConnection(userId){
    return new Promise((reslove,reject)=>{
        client.srem(OnlineUserSet,(String)(userId),(err,reply)=>{
            if(err){
                // console.log(err);
                reject(err);
            }
            else{
                client.hdel(userId,['namespace','user_id','socket_id','name'],(err,reply)=>{
                    if(err){
                        // console.log(err);
                        reject(err);
                    }
                    else{
                        // console.log(userId+" is disconnected");
                        reslove(reply)
                    }
                })
            }
        })
    })
}
//function ends//

//function to a single connected socket//
function getUser(userId){
    return new Promise((reslove,reject)=>{
        client.hgetall(userId,(err,reply)=>{
            if(err)
                reject(err);
            else
                reslove(reply);
        });
    });
}
//function ends

//function to creat Room space in redis when two user enters into game//
function createRoom(room,userId){
    return new Promise((reslove,reject)=>{
        client.sadd(room,userId,(err,reply)=>{
            if(err){
                // console.log(err);
                reject(err);
            }
            else{
                // console.log(reply);
                reslove(reply);
            }
        })
    })
}
//function ends//

function checkInRoom(room,userId){
    return new Promise((reslove,reject)=>{
        client.sadd(room,userId,(err,reply)=>{
            if(err){
                // console.log(err);
                reject(err);
            }
            else{
                // console.log(reply);
                resolve(reply);
            }
        })
    })
}
//function ends//

function DeleteGamerFromRoom(room,userId){
    return new Promise((reslove,reject)=>{
        client.srem(room,userId,(err,reply)=>{
            if(err){
                // console.log(err);
                reject(err);
            }
            else{
                // console.log(reply);
                reslove(reply);
            }
        })
    })
}

module.exports={
    setValue,
    Onlineusers,
    getUser,
    deleteConnection,
    createRoom,
    DeleteGamerFromRoom
}
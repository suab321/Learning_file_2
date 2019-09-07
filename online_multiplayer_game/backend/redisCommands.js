const redis=require('redis');

const client=redis.createClient({host:'127.0.0.1',port:'6379'});

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
    client.sadd(OnlineUserSet,value.user_id,(err,reply)=>{
        if(err)
            console.log(err);
        else
            console.log(reply);
    });
    client.hmset(value.user_id,[
        'namespace',value.namespace,
        'user_id',value.user_id,
        'socket_id',value.socket_id,
        'name',value.name
    ],(err,reply)=>{
        if(err)
            console.log(err);
        else
            console.log(reply);
    });
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
function deleteConnection(userId,socketId){
    client.hgetall(userId,(err,reply)=>{
        if(reply.socket_id === socketId)
            deleteUser(userId);
        else
            return;
    })
}
function deleteUser(userId){
    client.srem(OnlineUserSet,userId,(err,reply)=>{
        if(err)
            console.log(err);
        else{
            client.hdel(userId,['namespace','user_id','socket_id','name'],(err,reply)=>{
                if(err)
                    console.log(err);
                else{
                    console.log(userId+" is disconnected");
                    return;
                }
            })
        }
    })
}
//function ends//

module.exports={
    setValue,
    Onlineusers,
    deleteConnection
}
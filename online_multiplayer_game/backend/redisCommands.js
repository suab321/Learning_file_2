const redis=require('redis');

const client=redis.createClient({host:'127.0.0.1',port:'6379'});

client.on('connect',()=>{console.log("redis server connected")});
client.on('error',(err)=>{console.log(err)})

function Onlineusers(){
    client.smembers('Online_users',(err,reply)=>{
        reply.map(i=>{getAll(i)});
    })
}

function setValue(value){
    client.sadd('Online_users',value.user_id,(err,reply)=>{
        if(err)
            console.log(err);
        else
            console.log(reply);
    });
    client.hmset(value.user_id,[
        'namespace',value.namespace,
        'user_id',value.user_id,
        'socket_id',value.socket_id
    ],(err,reply)=>{
        if(err)
            console.log(err);
        else
            console.log(reply);
    });
}

function getValue(tableName,key){
    client.hget(key,tableName,(err,reply)=>{
        if(err)
            console.log("getValue "+err);
        else
            console.log("getValue "+reply);
    })
}

function getAll(key){
    client.hgetall(key,(err,reply)=>{
        if(err)
            console.log(err);
        else
            console.log(reply);
    })
}

module.exports={
    setValue,
    getValue,
    getAll,
    Onlineusers
}
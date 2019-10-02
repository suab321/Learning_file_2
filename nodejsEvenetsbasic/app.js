const express=require('express');
const io=require('socket.io');
const net=require('net');
const os=require('os');
const cluster=require('cluster');
const fh=require('farmhash');
const redisIO=require('socket.io-redis');

require('./test');

const path=require("path");

var ncpus=os.cpus().length;
var port=3000;

if(cluster.isMaster){
    var workers=[];
    
    function spawn(i){
        workers[i]=cluster.fork();
        console.log("forked "+workers[i].id);
        workers[i].on("exit",()=>{spawn(i)});
    }
    for(var i=0;i<ncpus;i++)
        spawn(i);
    
    function getIndex(ip,len){
        return fh.fingerprint32(ip)%len;
    }
    var server=net.createServer({pauseOnConnect:true},function(connection){
        var worker=workers[getIndex(connection.remoteAddress,ncpus)];
        worker.send("stickSession",connection);
    }).listen(port);
}
else{
    require("./test");
}
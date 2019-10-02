const express=require('express');
const io=require('socket.io');
const net=require('net');
const os=require('os');
const cluster=require('cluster');
const fh=require('farmhash');
const redisIO=require('socket.io-redis');
const path=require('path');


    var app=new express();
    app.use(express.static(path.join(__dirname+"public")));
    app.get("/",(req,res)=>{res.sendFile(__dirname+"/public/abhi.html")})

    var server=app.listen(0,'localhost');
    var socket=io(server);
    socket.adapter(redisIO({host:"localhost",port:"6379"}));
    socket.on("connection",Ps=>Ps.emit("connected",{data:"hi"}))
    process.on("message",function(event,connection){
        if(event==="stickSession"){
            server.emit("connection",connection);
            connection.resume();
        }
        else
            return;
    })
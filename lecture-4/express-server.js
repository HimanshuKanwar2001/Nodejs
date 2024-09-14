const express=require('express');

//Create a server.
const server=express();


//Handle for default request
server.get("/",(req,res)=>{
    res.send("Welcome to Express Server");
});

//Listen to specified port.
server.listen(3100,()=>{
    console.log("server is listening on 3100");
});
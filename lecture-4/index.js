const express=require('express');

//server
const server=express();



server.get('/',(req,res)=>{
   return  res.send("Welcome to express");
})


//my statics files are in public folder which can be accessed directly.
server.use(express.static('public'))

server.listen(3000,(error)=>{
    if(error){
        console.log("Error:",err);
    }
    else{
        console.log("Server is running on PORT 3000");
    }
})
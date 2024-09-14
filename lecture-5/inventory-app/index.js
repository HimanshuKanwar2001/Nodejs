const express=require("express");


const server=express();


server.get('/',(req,res)=>{
    return res.send("Welcome to Inventory App");
})






server.listen(3100,(err)=>{
    if(err){
        console.log("ERROR:",err);
    }
    else{
        console.log("Sever is working in Port 3100");
    }
})
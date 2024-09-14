const express = require("express");

//Create a server.
const server = express();

//Handle for default request
function firstMiddleware(req,res,next){
    console.log("this is first middleware");
    next();
}
function secondMiddleware(req,res,next){
    console.log("this is second middleware");
    next();
}

function globalMiddleware(req,res,next){
    console.log("This is global middleware");
    next();
}

//this is going to be executed for all requests
server.use(globalMiddleware);

//GET REQUEST
//route-level middleware
server.get("/",[firstMiddleware,secondMiddleware], (req, res) => {
    res.set("Content-type",'text/plain')
  res.send("Welcome to Express Server");
});

//POST REQUEST
server.post('/',(req,res)=>{
    res.status(201).send("Post request receieved");
})

//PUT REQUEST
server.put('/',(req,res)=>{
    res.send("PUT request received");
})

//DELETE REQUEST
server.delete('/',(req,res)=>{
    res.send("DELETE request receieved");
})


//Listen to specified port.
server.listen(3200, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("server is listening on 3200");
});

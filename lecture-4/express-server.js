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


//route-level middleware
server.get("/send",[firstMiddleware,secondMiddleware], (req, res) => {
  res.send("Welcome to Express Server");
});

//Listen to specified port.
server.listen(3200, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("server is listening on 3200");
});

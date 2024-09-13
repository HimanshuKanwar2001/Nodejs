//Create a server using NodeJS




//1.Import http library/module

const http=require('http');

//2.create server
const server=http.createServer((req,res) =>{
    //Here comes the request.
    res.end("Welcome to node js server");

});


//Specify a port to listen to client's requests.
server.listen(8001,()=>{

    console.log("server is listening to port ");

});



// console.log("server is listening to port ");
//Create a server using NodeJS




//1.Import http library/module

const http=require('http');

//2.create server
const server=http.createServer((req,res) =>{
    console.log(req.url);
    res.write("Welcome to my application ");
    if(req.url =="/product"){
        //response ends
        return res.end("This is Porduct Page");
    }
    else if(req.url =="/user"){

        return res.end("This is a User Server");
    }
    //logging.


    //Here comes the request.
    //modifying the response.
    return res.end("Welcome to node js server");

});


//Specify a port to listen to client's requests.
server.listen(8001,()=>{

    console.log("server is listening to port ");

});



// console.log("server is listening to port ");
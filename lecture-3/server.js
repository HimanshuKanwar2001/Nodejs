const http=require('http');




const server=http.createServer((req,res)=>{
    res.write("THis is coming from Nodejs server. ");
    if(req.url=="/first"){
        return  res.end("This is first response");

    }
    else{

        return res.end("This is default response"); // to the res.end() you can either use a return keyword or use if and else both 
    }




     res.end("Hello from nodejs")
});


server.listen(3100,(req,res)=>{

    console.log("Server is running on port 3100");
});


const http=require('http');
const fs=require('fs');
const PORT=3002; 


const server=http.createServer((req,res)=>{
const data=fs.readFileSync("index.html").toString();



res.end(data);
});


server.listen(PORT,()=>{

    console.log("Server is listening to port :",PORT);
});

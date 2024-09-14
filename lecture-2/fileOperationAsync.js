import fs from "fs";


// const fs=require('fs');





//Reading data  ///////////////////////////////////////////////
// fs.readFile("data.txt",(err,data)=>{
//     if(err){
//         console.log("Error message :",err);
//     }
//     else
//     console.log(data.toString());
// })



//Write data  ///////////////////////////////////////////
// fs.writeFile("employee.txt","New Employee",(err)=>{
//     if(err){
//         console.log("Error message:",err);
//     }
//     else{
//         console.log("File is written");
//     }
// })

// fs.appendFile("employee.txt","\n hahahah New Employee",(err)=>{
//     if(err){
//         console.log("Error:",err);
//     }
//     else{
//         console.log("File is updated");
//     }
// })

fs.unlink("employee.txt",(err)=>{
    if(err) console.log("Error");
    else console.log("File has been deleted");
})

console.log("this is another operation");




//These are input/output operation cause file system is handled by operating system and not part of program.
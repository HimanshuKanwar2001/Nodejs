import fs from "fs";
import path from "path";


// const fs=require('fs');
// const path =require('path');

const filePath=path.join("src","home","data.txt");
const filePathResolved=path.resolve("src","home","data.txt");

console.log("filePath  :",filePath); //output : src\home\data.txt
console.log("filePathResolved   :",filePathResolved); // output  : E:\Fullstack developer\Node js\new-files\learn\lecture-2\src\home\data.txt

console.log(path.extname(filePathResolved)); //extension name eg. .txt





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

// fs.unlink("employee.txt",(err)=>{
//     if(err) console.log("Error");
//     else console.log("File has been deleted");
// })

console.log("this is another operation");




//These are input/output operation cause file system is handled by operating system and not part of program.
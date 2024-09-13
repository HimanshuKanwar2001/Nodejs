import fs from 'fs';

// const fs=require('fs');



// TO read file content using blocking code
console.log("starting to read");

//sometime the amout of time given to read the file is less so to compensate that fs provide with a buffer memory to cover for the missing data which was not able to read initailly

// const buffer=fs.readFileSync('data.txt',{
//     encoding:"utf-8",//to encode data form byte to toString format
// });
// console.log(buffer);


//Create and Writing  a file.
try{

    fs.writeFileSync("employee.txt","Name:HERO,Age:50,Position:Manager");
}catch(err){
    console.log("Error:",err);
}
fs.appendFileSync("employee.txt","Name:Bhai,age:23,Position:Developer")

//Delete  a file
try{
 console.log("Deleting the file");
    fs.unlinkSync("employee.txt");
}catch(err){
    console.log("File Does not exist");
    console.log("ERROR:",err);
}


//Append data to existing file

console.log("This is a another operation being performed")



import fs from 'fs';

// const fs=require('fs');



// TO read file content using blocking code
console.log("starting to read");

//sometime the amout of time given to read the file is less so to compensate that fs provide with a buffer memory to cover for the missing data which was not able to read initailly

const buffer=fs.readFileSync('data.txt',{
    encoding:"utf-8",//to encode data form byte to toString format
});
console.log(buffer);

console.log("This is a another operation being performed")



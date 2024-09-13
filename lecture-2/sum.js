// 1.Import readline

import readline from "readline";

// const readline = require("readline");

//2. Configure interface to connect with terminal/command line.

const interfaces = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//3. Reading values
interfaces.question("Enter First number", (num1) => {
  interfaces.question("Please enter second number ", (num2) => {
    //num1 and num2
    const sum = Number(num1) + Number(num2);
    console.log(sum);
  });
});

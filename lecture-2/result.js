//call arithmetic funtions, get result  and print results on terminal.

//how to import a module.

// const arthmeticModule=require("./arithmetics");

// //call the sum function
// const result=arthmeticModule.sum(23,34);
// console.log(result);

import {sum,num} from "./arithmetics.js" ;
// import * as arthmeticModule from "./arithmetics.mjs" ;

// console.log(arthmeticModule.sum(3,5));
console.log(sum(3,5));
console.log(num);
// console.log(arthmeticModule.div(3,5));



//Benifits

// 1 improve readability and optimization
//Tree shaking : remove unused imports from the production builds


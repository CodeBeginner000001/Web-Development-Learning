// let n=5;
// for(let i=0;i<n;i++)
// {
//     console.log("Hello",i);
// }
// console.log("Bye");

/* 

process.argv - returns an array containing the command-line 
arguments passed when the node process was launched.
*/
// console.log(process.argv)

// let args = process.argv;
// for(let i=0;i<args.length;i++)
// {
//     console.log("Hello to",args[i]);
// }



/* 
Module.exports
*/
// const math=require("./math")
// console.log(math.sum(2,4));
// console.log(math.mul(2,4));
// console.log(math.g);
// console.log(math.PI);

/*------> Uncomment above based on using math.js file in lecture-1 <---- */

/*-------> Uncomment below for checking fruits folder <----- */

// const info = require("./fruits");
// console.log(info);
// console.log("\nAccessing each element of info array which is an object");
// for(let i=0;i<info.length;i++)
// {
//     console.log(info[i]);
// }
// console.log("\nAccessing name of each object in array")
// for(let i=0;i<info.length;i++)
// {
//     console.log(info[i].name);
// }
// console.log("\nAccessing Color of each object in the array")
// for(let i=0;i<info.length;i++)
// {
//     console.log(info[i].color);
// }


/*------> Using import in js <------ */
import {sum,mul,g,pi} from "./math.js"

console.log(sum(1,2));
console.log(mul(5,4));
console.log(g);
console.log(pi);

import { generate } from "random-words";
console.log(generate());
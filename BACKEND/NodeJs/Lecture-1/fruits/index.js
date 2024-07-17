/*
Ya ek entry file hoti hai ek directory ma jissa directly 
access kiya jata hai.....
*/

const apple = require("./apple.js")
const orange = require("./orange.js")
const banana = require("./banana.js")
const pineapple = require("./pineapple.js")
let fruits = [apple,orange,banana,pineapple]

module.exports =fruits;

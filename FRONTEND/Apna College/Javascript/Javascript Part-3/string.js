
// no changes will be observed - String Method
/*
let password = prompt("Enter Password");
console.log(password.trim());
*/

// String Upper case and lower case 
let name = "Adarsh Goyal";
let msg = "error";
console.log(msg.toUpperCase());
console.log(name.toLowerCase());

// string method with Argument
// Indexof
let str = "Ilovestring";
console.log(str.indexOf("love"));  //1
console.log(str.indexOf("j"));   //-1
console.log(str.indexOf("o"));   //2

// Method Chaining
let msg1 = "     hello    ";
console.log(msg1.toUpperCase().trim());


// Slice
str="IloveCoding"
console.log(str.slice(5));
console.log(str.slice(1,5));
console.log(str.slice(-5));

// replace
str = "IloveCoding";
console.log(str.replace("love", "do"));
console.log(str.replace('o', 'x'));

// Repeat
str = "Go";
console.log(str.repeat(5));



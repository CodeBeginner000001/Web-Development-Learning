// console.log("Hello");
// console.log("Hello");
// console.log(a); //due to this line the code will get stuck and wont go any further which cause site to crash
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");

// The above code will stop working after two line from the start.

// Running the code without error
console.log("Hello");
console.log("Hello");
try {
    console.log(a);
} catch {
    console.log("caught an error.. a is not defined");
}
console.log("Hello");
console.log("Hello");
console.log("Hello");

// code after declaring a
console.log("Declaring a variable......")
console.log("Hello");
console.log("Hello");
let a = 5;
try {
    console.log(a);
} catch {
    console.log("caught an error.. a is not defined");
}
console.log("Hello");
console.log("Hello");
console.log("Hello");


// getting type of error without crashing the code
console.log("getting what error it is...")
console.log("Hello");
console.log("Hello");
try {
    console.log(b);
} catch(err) {
    console.log("caught an error.. b is not defined");
    console.log(err);
}
console.log("Hello");
console.log("Hello");
console.log("Hello");


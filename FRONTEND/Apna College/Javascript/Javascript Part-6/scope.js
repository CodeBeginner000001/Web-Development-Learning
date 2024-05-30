// function Scope

let sum = 54; // Global Scope

function calSum(a, b) {
    let sum = a + b; //Function Scope
    console.log(sum);
}
console.log(calSum(1, 2));
console.log(sum);

//  Block Scope
for (let i = 1; i <= 5; i++)
{
    console.log(i);  //block scope
}
console.log(i);

let age = 25;
if (age >= 18) {
    let str = "adult";
}
console.log(str);

// Lexical scope
function outerfunc() {
    let x = 5;
    let y = 6;
    function innerFunc() {
        let a = 10;
        console.log(x);
        console.log(y);
    }
    console.log(a);
    innerFunc();
}

 
// Practice Qs
let greet = "hello";
function changeGreet() {
    let greet = "namaste";
    console.log(greet);
    function innerGreen() {
        console.log(greet);
    }
}
console.log(greet);
changeGreet();



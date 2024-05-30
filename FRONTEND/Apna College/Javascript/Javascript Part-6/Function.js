function hello() {
    console.log("Hello");
}

function print1to5() {
    for (let i = 0; i < 5; i++)
        console.log(i + 1);
}

// send a value in function through variable
function isAdult(age) {
    if (age >= 18) {
        console.log("Adult");
    } else {
        console.log("not adult");
    }
}

// Practice Questions
function poem() {
    console.log("Water Water everywhere...");
    console.log("not a drop to drink...");    
}

function rolldice() {
    let rand = Math.floor(Math.random() * 6) + 1;
    console.log(rand);
}

// Function with Argument
function printname(name) {
    console.log(name);
}
printname("Adarsh Goyal");


function sum(a, b) {
    console.log(a + b);
}
sum(1, 2);
sum(4, 5);
sum(7, 8);


function calcavg(a, b, c) {
    console.log((a + b + c) / 3);
}
calcavg(1, 3, 2);
calcavg(4, 2, 1);
calcavg(6, 5, 9);


function multiple(num) {
    for (let i = num; i <=(num * 10); i += num)
    {
        console.log(i);
        }
}
multiple(5);





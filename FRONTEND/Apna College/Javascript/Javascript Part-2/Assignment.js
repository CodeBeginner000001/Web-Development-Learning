// Question-1
console.log("Question-1");
let num = 25;
if (num % 10 == 0)
{
    console.log("good");
} else {
    console.log("bad");
}

// Question-2
/*console.log("Question-2");
let userName = prompt("Enter Your name:");
let Age = prompt("Enter Your Age:");
let msg = userName + " is " + Age +" year old.";
alert(msg);*/

// Question-3
console.log("Question-3");
/*let d = prompt("Enter the quarter to know the months:");
let n = parseInt(d); 
switch (n) {
    case 1: console.log('January', 'February', 'March');
        break;
    case 2: console.log('April', 'May', 'June');
        break;
    case 3: console.log('July', 'August', 'September');
        break;
    case 4: console.log('October', 'November', 'December');
        break; 
    default: console.log(`Months in Quarter ${n}: Doesn't exist`);
}*/

// Question-4 
console.log("Question-4");
/*let d1 = prompt("Enter the string:");
if ((d1[0] == 'A' || d1[0] == 'a') && (d1.length > 5)) {
    console.log("Golden String...");
} else {
    console.log("Not a Golden String....");
}*/

// Question-5 
console.log("Question-5");
let a = 88;
let b = 99;
let c = 34;
if (a > b && b > c) {
    console.log(a);
} else if (b > c) {
    console.log(b);
} else
{
    console.log(c);
}

// Question-6 
console.log("Question-6");
let v = 32;
let w = 47852;
if ((v %= 10) === (w %=10))
{ 
    console.log("Have same last digit....");
} else {
    console.log("Doesn't have same last digit....");
}
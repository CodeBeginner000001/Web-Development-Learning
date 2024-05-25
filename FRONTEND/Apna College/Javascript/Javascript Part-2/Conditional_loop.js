console.log("Before If Statement")
let a = 23;
if (a >= 18)
{
    console.log("Ready! For vote")
}
console.log("After If Statement")


let first_name = "Adarsh"
if (first_name == "Adarsh")
{
    console.log(`Welcome ${first_name}`);
}

// Making a traffic light
console.log("Making a Traffic Light....")
let light = "Red";
if (light === "Red")
{
    console.log("Stop! Light is Red");
}
if (light === "Yellow")
{
    console.log("Wait! Light is Yellow");
}
if (light === "Green")
{
    console.log("Go! Light is Green");
}

// checking the age for voting 
let age = 18;
if (age === 18)
{
    console.log("You are ready for vote");
}
else if (age >= 20) {
    console.log("You got to have a voter id card");
}
else {
    console.log("You are not ready for voting");
}


// checking marks 
let marks = 75;
if (marks >= 80) {
    console.log("A+");
}
else if (marks >= 60) {
    console.log("A");
}
else if (marks >= 33) {
    console.log("B");
}
else {
    console.log("F");
}

// checking weather through month
let month = "April";
if (month === "April") {
    console.log("Summer is here.....");
}
else
{
    console.log("Winter is here....");
}

// Practice Question
let price = "XL";
if (price === "XL") {
    console.log("Price is Rs.250");
}else if (price === "L") {
    console.log("Price is Rs.200");
}else if (price === "M") {
    console.log("Price is Rs.100");
}
else {
    console.log("Price is Rs.50");
}

// Nested loop
let marks1 = 45;
if (marks1 >= 33)
{
    console.log("Pass");
    if (marks1 >= 80)
    {
        console.log("Grade:O");
    }
    else
    {
        console.log("Grade:A");
    }
}
else {
    console.log("Better luck next time ......")
}

// And Logic
let a1 = 75;
if ((a1 >= 33) && (a1 >= 80)) {
    console.log("Pass");
    console.log("A+");
}

//OR Logic
let a2 = 75;
if ((a2 >= 33) || (a2 >= 80)) {
    console.log("Pass");
    console.log("A+");
}

// Not logic
let a3 = 75;
if (!(a3 < 33)) {
    console.log("Pass");
    console.log("A+");
}


// Pratice Question-2
let name = "apple";
if (name[0] === 'a' && name.length > 3)
{
    console.log("String is Good");
}
else {
    console.log("String is bad");
}

let num = 12;

if ((num % 3 == 0) && ((num + 1 === 15) || (num - 1 === 11)))
{
    console.log("Safe");
}
else {
    console.log("Not safe");
}


// Traffic light using Switch case
let traffic = "red";
switch (traffic)
{
    case "red":
        console.log("Stop! Light is Red");
        break;
    case "yellow":
        console.log("Wait! Light is Yellow");
        break;
    case "green":
        console.log("Go! Light is Green");
        break;
    default:
        console.log("Light is Broken");
}

// Practice Question-3
let day = 1;
switch (day)
{
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Sunday!Fun day")
}

alert("This is a Simple alert!");

console.log("This is a Simple log");
console.error("This is an error msg");
console.warn("This is a warning msg");

let firstName = prompt("Enter first name");
let lastName = prompt("Enter last name");
let msg = "Welcome " + firstName + lastName + " !";
alert(msg);


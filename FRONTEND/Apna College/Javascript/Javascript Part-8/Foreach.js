
let arr = [1, 2, 3, 4, 5];

function print(el) {
    console.log(el);
}

arr.forEach(print);
// writing a function in "for each method of array".
console.log("Using function")
arr.forEach(function (el) {
    console.log(el);
});

// using arrow function for the same
console.log("using Arrow function");
arr.forEach((el) => console.log(el));

// using in array with objects and accessing a particular section
console.log("Using in array with objects");
let students = [
    {
    name: "aman",
    marks: 95,
 },
{
    name: "adarsh",
    marks: 90,
},
{
    name: "Sneha",
    marks: 85,
},
];
students.forEach((students) => {
    console.log(students.marks);
});
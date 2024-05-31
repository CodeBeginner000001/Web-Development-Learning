// Spread with array
let arr = [1, 2, 3, 4, 5];
console.log(...arr);
// Output: 1 2 3 4 5

console.log(..."Adarsh Goyal");
// Output: A d a r s h  G o y a l

let newarr = [...arr];
console.log(newarr);
// Output: [1, 2, 3, 4, 5]
let chars = [..."Hello,World"];
console.log(chars);
// Output: ["H", "e", "l", "l", "o", ",", "w", "o", "r", "l", "d"]

// arranging odd number first and even in the end
let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8, 10];
let num = [...odd, ...even];
console.log(num);   
// Output: [1, 3, 5, 7, 9, 2, 4, 6, 8, 10]

// arranging even number first and odd in the end
let num1 = [...even, ...odd];
console.log(num1);
// Output: [2, 4, 6, 8, 10, 1, 3, 5, 7, 9]


// Spread with object literals
let data = {
    email: "ironman@gmail.com",
    password: "abcd",
};

let datacopy = { ...data, id: 123 };
console.log(datacopy);
// Output: {email: "ironman@gmail.com", password: "abcd", id: 123}

let arr1 = [1, 2, 3, 4, 5];
let obj1 = { ...arr1 };
console.log(obj1);
// Output: {0: 1, 1: 2, 2: 3, 3: 4, 4: 5}
let obj2 = { ..."hello" };
console.log(obj2);
// Output: {0: 'h', 1: 'e', 2: 'l', 3: 'l', 4: 'o'}

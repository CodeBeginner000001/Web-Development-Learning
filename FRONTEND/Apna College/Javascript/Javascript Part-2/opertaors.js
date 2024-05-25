// Arithmetic Operator
let a = 10;
let b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// Unary Operator
console.log(a++);  //10
//  a=11 after above line
console.log(++a);  //12

a = 10;
// Assignment Operator
b = a;
console.log(b);  //10
b += 10;
console.log(b);  //20
b -= 10;
console.log(b); //10
b *= 10;
console.log(b); //100
b /= 10;
console.log(b); //10
b %= 10;
console.log(b); //0

// Comparison Operator
let age = 23;
console.log(age > 18);  //true
console.log(age >= 18); //true
console.log(age < 18);  // false
console.log(age <= 18); //false
console.log(age == 18); //false
console.log(age != 18); //true

console.log(age == "23") //true
console.log(0 == ' ') //true

console.log(age === "23") //false
console.log(0 === ' ') //false

// Comparison for non number
console.log('a' < 'A');  //false 
console.log('a' < 'b');  // true
console.log('P' < 'p');  //true
console.log('a' > 'b');  //false
console.log('a' < 'B'); //false
console.log('*' < '&');  //false
console.log('*' > '&');  //true


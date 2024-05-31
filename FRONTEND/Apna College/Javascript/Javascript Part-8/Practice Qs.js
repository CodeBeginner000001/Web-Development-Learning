// Check if all numbers in our array are multiples of 10 or not.
let num = [10, 20, 50, 100, 500, 150]
let result = num.every((el) => {
    return (num % 10 == 0); 
});

let num1 = [10, 20, 5, 100, 500, 150]
let result1 = num1.every((el) => {
    return (num1 % 10 == 0); 
});

// Create a function to find the min number in an array
let arr = [1, 2, 4, 3, 5, -3, -10, 0, -50, -4];
let minarr = arr.reduce((min, el) => {
    if (el < min) {
        return el;
    }
    else {
        return min;
    }
});
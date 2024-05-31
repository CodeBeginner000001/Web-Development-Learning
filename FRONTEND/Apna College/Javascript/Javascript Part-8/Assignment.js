// Question-1
let num = [1, 2, 3, 3, 4, 5];
let SquareSum = num.reduce((square, el) => {
    return square + (el * el);
});
console.log(SquareSum); // Output: 64
let avg = SquareSum / num.length;
console.log(avg); // Output: 10.666666666666667


// Question-2
let newarr = num.map((num) => {
    return num + 5;
});
console.log(newarr); // Output: [6, 7, 8, 8, 9, 10]


// Question-3
let string = ["adam", "harvard", "standford", "deepu"];
let upper = string.map((string) => (string.toUpperCase()));
console.log(upper); // Output: ["ADAM", "HARVARD", "STANDFORD", "DEEPU"]


// Question-4
const doubleAndReturnArgs = (arr, ...args) => [
    ...arr,
    ...args.map((v)=> v*2),
];

doubleAndReturnArgs([1, 2, 3], 4, 4);
console.log(doubleAndReturnArgs([1, 2, 3], 4, 4));
// Output: [1, 2, 3, 8, 8]
doubleAndReturnArgs([2], 10, 8, 2);
console.log(doubleAndReturnArgs([2], 10, 8, 2));
// Output: [2, 20, 16, 4]
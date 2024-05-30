// Return function
function sum(a, b) {
    return a + b;
}
let s = sum(3, 4);
console.log(s);

// call function in function
function sum(a, b) {
    return a + b;
}
console.log(sum(sum(3, 4), 5));

function sumNumber(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++){
        sum += i;
    }
    return sum;
}
console.log(sumNumber(10));

// String Concatenation
function concat(str) {
    let result = "";
    for (let i = 0; i < str.length ; i++)
    {
        result += str[i];
    }
    return result;
}
let str = ["Hi","-","Hello","-","Bye", "!"];
console.log(concat(str));

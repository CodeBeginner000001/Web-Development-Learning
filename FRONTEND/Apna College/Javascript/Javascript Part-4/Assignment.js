// Question-1
console.log("Question 1");
let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;
for (let i = 0; i < arr.length; i++)
{
    if (arr[i]===num) {
        arr.splice(i, 1);  // splice ma arr.splice(start kaha sa karna hai , delete kitna time karna hai)
    }
}
console.log(arr);

// Question-2
console.log("Question 2");

let num1 = 2535;
console.log(num1);
let count = 0;
while (num1>0) {
    count++;
    num1 = Math.floor(num1/10);
}
console.log(count);

// Question-3
console.log("Question 3");
let b = 287152;
let sum = 0;
while (b > 0) {
    let c = b % 10;
    sum += c;
    b = Math.floor(b/10);
}
console.log(sum);

// Question-4
console.log("Question 4");
let a = prompt("Enter to find factorial:");
let mul = 1;
for (let i = a; i >= 1; i--)
{
    mul *= i;
}
console.log(mul); 

// Question-5
console.log("Question 5");
let v = [2, 6, 9, 10, 95, 6, 4, 83, 96, 0, 8, 65];
let larger = 0;
for (let i = 0; i < v.length; i++)
{
    if (larger < v[i])
    {
        larger = v[i];
    }
}
console.log(larger);
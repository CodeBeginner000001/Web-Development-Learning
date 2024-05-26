// Print all odd number 1 to 15
console.log("All odd number from 1 to 15");
for (let i = 1; i <= 15; i += 2)
{
    console.log(i);
}

// Print all odd number 2 to 10
console.log("All odd number from 1 to 15");
for (let i = 2; i <= 10; i += 2)
{
    console.log(i);
}

// Print all multiple for number n to n*10
/*console.log("All multiple for n to n*10");
let f = prompt("Enter the numbere for finding multiple of that number:");
let n = parseInt(f);
for (let i = n; i <= n*10; i=i+n)
{
    console.log(i);
}*/

// Nested Looping
console.log("Nested loop....");
for (let i = 1; i <= 3; i++)
{
    console.log(`Outer loop: ${i}`)
    for (let j = 1; j <= 3; j++)
    {
        console.log(j);
        }
}
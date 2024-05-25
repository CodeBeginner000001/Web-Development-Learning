let pencilprice = 10;
let Eraserprice = 15;
// Normal way of writting
let output = "The total price is :" + (pencilprice + Eraserprice) + " Rupees.";
console.log(output);
// Template Literals
let output1 = `The total price is : ${pencilprice+ Eraserprice} Rupees.`;
console.log(output1);

console.log(`The total price is : ${pencilprice} Rupees.`)
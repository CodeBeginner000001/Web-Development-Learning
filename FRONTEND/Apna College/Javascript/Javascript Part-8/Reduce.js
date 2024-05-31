// Reduce the array to a single value
let num = [1, 2, 3, 4];
let a = num.reduce((res, el) => res + el);
// console.log(a); // Output: 10
// Working...
let b = num.reduce((res1, el) => {
//    console.log(res1);
   return res1 + el;
});
// console.log(b);


// finding maximum in array
let nums = [2, 3, 4, 5, 3, 4, 7, 8, 1, 2];
let result = nums.reduce((max, el) => {
   if (el > max) {
      return el;
   }
   else {
      return max;
   }
});
// console.log(result); // Output: 8

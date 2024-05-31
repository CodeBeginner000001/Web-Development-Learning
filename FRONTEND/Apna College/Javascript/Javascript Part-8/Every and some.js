// Array Method -> Every
// It works on AND Logic
let a=[1, 2, 3, 4].every((el) => (el % 2 == 0));
// Output: false
let b=[2, 4].every((el) => (el % 2 == 0));
// Output: true
let c = [2, 4, 1].every((el) => (el % 2 == 0));
// Output: false


// Array Method -> Some
// It works on OR Logic
let d = [1, 2, 3, 4].some((el) => (el % 2 == 0));
// Output: true
let e = [1, 3, 5].some((el) => (el % 2 == 0));
// Output: false
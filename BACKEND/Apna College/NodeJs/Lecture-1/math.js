// const sum=(a,b)=>a+b;
// const mul=(a,b)=>a*b;
// const g=9.8;
// const PI=3.14;

// let obj = {
//     sum:sum,
//     mul:mul,
//     g:g,
//     PI:PI
// }

// module.exports = obj;


/**
 Can write in both ways, they work in same ways
 module.exports
 or
 exports
 */
/* Output remains the same as for above program execution */
// module.exports.sum=(a,b)=>a+b;
// module.exports.mul=(a,b)=>a*b;
// module.exports.g=9.8;
// module.exports.PI=3.14;

/* Output remains the same as for above program execution */
// exports.sum=(a,b)=>a+b;
// exports.mul=(a,b)=>a*b;
// exports.g=9.8;
// exports.pi=3.14;

/*Using import in script.js*/
export const sum=(a,b)=>a+b;
export const mul=(a,b)=>a*b;
export const g=9.8;
export const pi=3.14;
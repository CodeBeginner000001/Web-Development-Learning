function sum(...args) {
    return args.reduce((add, el) => add + el);
}
console.log(sum(1, 2, 3, 4, 5)); 

function min(msg, ...args1) {
    console.log(msg);
    return args1.reduce((min, el) => {
        if (el < min) {
            return el;
        }
        else {
            return min;
        }
    });
}

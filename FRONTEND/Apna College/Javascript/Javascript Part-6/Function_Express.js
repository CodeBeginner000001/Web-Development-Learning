const sum = function (a, b) {
    return a + b;
}
console.log(sum(2, 3));

// Function Override
let hello = function () {
    console.log("hello");
}

hello = function () {
    console.log("namaste");
}


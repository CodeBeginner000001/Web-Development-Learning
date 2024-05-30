// Practice Question-1
let cube = (n) => (n * n * n);

// Practice Question-2
let id = setInterval(() => {
    console.log("Hello World");
}, 2000);

setTimeout(() => {
    clearInterval(id);
}, 10000);
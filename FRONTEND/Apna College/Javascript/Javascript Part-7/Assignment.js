// Question-1
let arr = [1, 2, 2, 3, 2, 455, 3, 5]
const arrayAverage = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    return (total / arr.length);
};

let arr1 = [1, 2, 2, 3, 2, 455, 3, 5]
const arrayAverage1 = (arr) => {
    let total = 0;
    for (let number of arr){
        total += number;
    }
    return (total / arr.length);
};

// Question-2
let isEven = (n) => {
    if (n % 2 == 0) console.log("Is even");
    else console.log("Not Even")
}

// Question-3
const object = {
    message: "Hello,World",
    logMessage() {
        console.log(this.message);
    }
};
setTimeout(object.logMessage, 1000);

// Question-4
let length = 4;
function callback() {
    console.log(this.length);
}

const object1 = {
    length: 5,
    method(callback) {
        callback();
    },
};
object1.method(callback, 1, 2);
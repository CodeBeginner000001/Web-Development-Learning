function multipleGreet(func, n) {
    for (let i = 0; i < n; i++)
    {
        func();
    }

}
let greet = function () {
    console.log("Hello");
}

multipleGreet(greet, 1000)

// passing function to a function
function multipleGreet(func, n) {
    for (let i = 0; i < n; i++)
    {
        func();
    }

}
let g = function () {
    console.log("Hello");
}

multipleGreet(function () { console.log("namaste") }, 1000)

// return function 
function oddEvenTest(request) {
    if (request == "odd") {
        return function (n) {
            console.log(!(n % 2 == 0));
        }
    } else if (request == "even") {
        return function (n) {
            console.log(n%2==0)
        }

    } else {
        console.log("Wrong Request");
    }
}

let request = "odd";
/*in console 
you can define a variable to a function
for eg:- let func=oddEvenTest(request);
then you can use that varibale to access the function 
For eg: func(8);
output will be false as the request is in odd state.
*/
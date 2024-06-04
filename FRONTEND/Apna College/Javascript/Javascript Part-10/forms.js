/*Code 1*/

// let form = document.querySelector("form");
// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     // alert("Form Submitted");
//     let inp = document.querySelector("input");
//     console.dir(inp);
//     console.log(inp.value);
// })

let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    // let user = document.querySelector("#user");
    // let pass = document.querySelector("#pass");
    let user = this.elements[0];
    let pass = this.elements[1];
    console.log(user.value);
    console.log(pass.value);
});

user.addEventListener("change", function () {
    console.log("changed");
    console.log("Final value = ", this.value);
})
console.log("input down below:")
user.addEventListener("input", function () {
    console.log("Input changed");
    console.log("Final value = ", this.value);
})
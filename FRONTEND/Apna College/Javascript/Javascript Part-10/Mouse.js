/*DOM Events */

/*
--->  onclick: when an element is clicked
--->  onmouseenter: When mouse enters an element area
*/
// let btns = document.querySelectorAll("button");
// btns.onclick = function () {
//     console.log("Button was clicked");
// }
// function sayHello() {
//     alert("Hello!");
// }
// btns.onclick = sayHello;

/*for many button doing same action */
// for (btn of btns) {
//     btn.onclick = sayHelo;
//     btn.onmouseenter = function () {
//         console.log("You entered a button")
//     }
//     console.dir(btn);
// }
// function sayHelo() {
//     console.log("Hello!");
// }
/* when onclick is used it uses the latest action assigned to it deleting the prevoius action
for eg:- if a hello action is assigned to it but after that ask,hi action is assigned then 
whenever onclicked is used it will say ask,hi
*/


/* To solve the above problems we use 
Event Listener
using Event Listeners we can execute more then one fumction on one click or one action
*/
// let btns = document.querySelectorAll("button");
// for (btn of btns) {
//     btn.addEventListener("click", sayHello);
//     btn.addEventListener("click", sayName);
// }
// function sayHello() {
//     alert("Hello!");
// }
// function sayName() {
//     alert("Adarsh Goyal");
// }

/* dblclick: When double click on the element. */
// for (btn1 of btns) {
//     btn1.addEventListener("dblclick", function () {
//         console.log("You double clicked me");
//     });
// }

/*Using click on any element */
// let para = document.querySelector("p");
// para.addEventListener("click", function(){
//     console.log("You clicked a Paragraph");
// });

// let box = document.querySelector(".box")
// box.addEventListener("mouseover", function () {
//     console.log("Mouse Entered the div block");
// }) 

/*This im the Event Listeners */
let button = document.querySelector("button");
let p = document.querySelector("p");
let div = document.querySelector(".box");

// button.addEventListener("click", function () {
//     console.log(this); 
//     this.style.background = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
//     // this.style.background = getcolor();
// });

button.addEventListener("click",color)
p.addEventListener("dblclick",color)
div.addEventListener("mouseenter",color)

function getcolor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let color = `rgb(${red},${green},${blue})`;
    return color;
}

function color() {
    console.dir(this.innerText);
    this.style.backgroundColor = getcolor();
}




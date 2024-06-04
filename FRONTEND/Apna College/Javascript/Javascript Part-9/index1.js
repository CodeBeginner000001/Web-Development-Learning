// Question-1
let body = document.querySelector("body");
let input_1 = document.createElement("input");
let btn = document.createElement("button");
btn.innerText="Click me!";
body.append(input_1);
body.append(btn);

// Question-2
console.dir(input_1);
input_1.setAttribute("placeholder", "username");
btn.setAttribute("id", "btn");

// Question-3
let btn_1 = document.querySelector("#btn");
btn_1.style.backgroundColor = "blue";
btn_1.style.color = "white";

// Question-4
let h_1 = document.createElement("h1");
h_1.innerText = "DOM Practice";
h_1.style.textDecoration = "underline";
h_1.style.color = "purple";
body.append(h_1);

// Question-5
let p = document.createElement("p");
p.innerHTML = "Javascript <b>Practice</b> question";
body.append(p);


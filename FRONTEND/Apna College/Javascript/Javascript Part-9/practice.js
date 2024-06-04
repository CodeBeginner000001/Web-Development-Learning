let body = document.querySelector("body");
// console.dir(container);

let para = document.createElement("p");
para.innerText = "Hey I'm red!";
console.dir(para);
para.classList.add("red");
body.append(para);

let h3 = document.createElement("h3");
h3.innerText = "I'm a blue h3!";
h3.classList.add("blue");
body.append(h3);

let div1 = document.createElement("div");
let h1 = document.createElement("h1");
let p1 = document.createElement("p");
h1.innerText = "I'm in a div";
p1.innerText = "ME TOO!";
div1.append(h1);
div1.append(p1);
div1.classList.add("box");
body.append(div1);


/*inserting a div with name into a div with a name conatiner defined in html */
// let container = document.querySelector(".container");
// container.style.backgroundColor = "black";
// container.style.width = "500px";
// container.style.height = "500px";

// let div1 = document.createElement("div");
// container.appendChild(div1);
// div1.classList.add("conta");
// let cont = document.querySelector(".conta");
// cont.style.backgroundColor = "pink";
// cont.style.width = "200px";
// cont.style.height = "200px";

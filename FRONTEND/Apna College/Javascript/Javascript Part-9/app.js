/*Selecting Elements */

/* getElementByClassName */
// let smallimg = document.getElementsByClassName("oldImg")
// for (let i = 0; i < smallimg.length; i++){
//     console.dir(smallimg[i]);
//     console.dir(smallimg[i].src);
//     console.log(`value of image: ${i} is changed`);
//     smallimg[i].src = "./assets/spiderman_img.png";
//     console.dir(smallimg[i].src);
// }

/*getElementByTagName */
// let p = document.getElementsByTagName("p");
// console.log(p);
// p[1].innerHTML = "abc";

/*Query Selector */
// let a = document.querySelector("div a");
// console.dir(a);
// let b = document.querySelectorAll("div a");
// console.dir(b);

/*Using Properties and Method */

/*innerText: Show the visible text contained in a node. */
// let para = document.querySelector("p");
// console.dir(para);
// console.log(para.innerText);
// para.innerText = "Hi, I am Peter Parker!";

/*innerHTML: show the full Markup  */
// let para = document.querySelector("p");
// console.dir(para);
// console.log(para.innerHTML);
// para.innerHTML = "Hi, I am <strong>Peter Parker!</strong>";

/*textcontent: show all the full text */
// let para = document.querySelector("p");
// console.dir(para);
// console.log(para.textContent);

/*Manipulating Attribute */

/*getAttribute: to see the value of the attribute */

/*setAttribute: to set the value of the selected attribute */
// let img = document.querySelector('img');
// console.log(img);
// console.log(img.getAttribute('id'));
// img.setAttribute('id', 'spider-man');
// console.log(img.getAttribute('id'));

/*style: to style the page using js */
// let heading = document.querySelector("h1");
// console.dir(heading);
// console.log(heading.style);
// heading.style.color = "red";
// heading.style.fontWeight = "300";
// heading.style.textAlign = "center";
// heading.style.background = "black";
// heading.style.padding = "20px";

// let links = document.querySelectorAll(".box a");
// console.log(links);
// for (let i = 0; i < links.length; i++) {
//     links[i].style.background = "black";
//     links[i].style.color = "yellow";
//     links[i].style.textDecoration = "line-through";
// }


/*Manipulating Style */
/*
classList.add() to add a new classes

classList.remove() to remove a classes

classList.toggle() to toggle between add or remove

classList.contains() to check if class exists
*/
// let heading = document.querySelector("h1");
// console.log(heading.classList);
// heading.classList.add("abc");
// console.log(heading.classList);
// heading.classList.add("aqua");
// console.log(heading.classList);
// heading.classList.remove("abc");
// console.log(heading.classList);
// heading.classList.add("underline");
// console.log(heading.classList);
// console.log(heading.classList.contains("abc"));
// console.log(heading.classList.contains("underline"));
// console.log(heading.classList.contains("aqua"));
// heading.classList.toggle("aqua");
// heading.classList.toggle("underline");
// heading.classList.toggle("aqua");
// heading.classList.toggle("underline");

// let box1 = document.querySelector(".box");
// console.log(box1.classList);
// box1.classList.add("bg");
// console.log(box1.classList);


/*Navigation */
/*
parentElement: to get the parent element of the selected element

children: to get the children  of the element

nextElementSibling: to get the next sibling element

previousElementSibling: to get the previous sibling element
*/
// let h4 = document.querySelector("h4");
// console.log(h4.parentElement);
// console.log(h4.children);
// let ul = document.querySelector("ul");
// console.log(ul.parentElement);
// console.log(ul.children);
// console.log(ul.childElementCount);
// let box = document.querySelector(".box");
// console.log(box.children);
// console.log(box.childElementCount);

// let img = document.querySelector("img");
// console.log(img.previousElementSibling);
// console.log(img.nextElementSibling);
// console.log(img.previousElementSibling.style.color= "green");


/*Adding Elements */
/*
document.createElement('p')

appendChild(Element): add the new element but in the last of the content.

append(Element): add the new content to the same element, without using a new line 
but add content in the last of the old. And By-default if the element is created and added
using this method the content will get add in the end of the content.

prepend(Element): add the new element at the starting of the element.
 
insertAdjacent(where,element): add the element to the desired place.
-> beforebegin: Before the target element itself.
-> afterbegin: just inside the target element,before the first child.
-> beforeend: just inside the target element, after the last child.
-> afterend: After the target element itself.
*/

// console.log(document.createElement('p'));
// let newp = document.createElement('p');
// newp.innerText = "Hi,i am a new paragraph";
// console.log(newp.innerText);
// let button_1 = document.createElement("button");
// button_1.innerText = "Click Me";
// let box = document.querySelector('.box');
// box.appendChild(newp);
// box.appendChild(button_1);

// let newp1 = document.createElement('p');
// newp1.innerText = "Hi,i am a new text for append function ";
// box.append(newp1);
// let btn_2 = document.createElement("button");
// btn_2.innerText = "Click Me-2";
// newp1.append(btn_2);
// newp1.append(" Hello do to see you");

// let newp3 = document.createElement("p");
// let btn_3 = document.createElement("button");
// let btn_4 = document.createElement("button");
// let btn_5 = document.createElement("button");
// newp3.innerText = " I am third paragraph tag.";
// btn_3.innerText = "Click Me-3";
// btn_4.innerText = "Click Me-4";
// btn_5.innerText = "Click Me-5";
// box.prepend(newp3);
// newp3.prepend(btn_4);
// newp3.append(" Hello,")
// newp3.append(btn_5);
// box.prepend(btn_3);

// let btn_6 = document.createElement("button");
// btn_6.innerText = "Click Me-6";
// let btn_7 = document.createElement("button");
// btn_7.innerText = "Click Me-7";
// let btn_8 = document.createElement("button");
// btn_8.innerText = "Click Me-8";
// let btn_9 = document.createElement("button");
// btn_9.innerText = "Click Me-9";
// let p = document.querySelector("p");
// p.insertAdjacentElement("beforebegin", btn_6);
// p.insertAdjacentElement("afterbegin", btn_7);
// p.insertAdjacentElement("beforeend", btn_8);
// p.insertAdjacentElement("afterend", btn_9);


/*Removing Element */
/*
removeChild(element): remove the child element of the parent element.

remove(element): remove a particular element
*/
// let body = document.querySelector("body");
// let btn_9 = document.createElement("button");
// btn_9.innerText = "Click Me-9";
// let p = document.querySelector("p");
// p.insertAdjacentElement("afterend", btn_9);
// body.removeChild(btn_9);

// let body = document.querySelector("body");
// let btn_9 = document.createElement("button");
// btn_9.innerText = "Click Me-9";
// let p = document.querySelector("p");
// p.insertAdjacentElement("afterend", btn_9);
// btn_9.remove();
// p.remove();
/*JS is Single Threaded*/

// setTimeout(()=>{
//     console.log("Hello!");
// },2000);
// setTimeout(() =>{
//     console.log("Adarsh");
// },2000);

// console.log("hello...");

/*Callback Hell */
// h1=document.querySelector("h1");

// setTimeout(()=>{
//     h1.style.color="red";
// },1000);
// setTimeout(()=>{
//     h1.style.color="orange";
// },2000);
// setTimeout(()=>{
//     h1.style.color="green";
// },3000);

/*Putting above code in a function */
// function changeColor(color,time){
//     setTimeout(()=>{
//         h1.style.color=color;
//     },time);
// }
// changeColor("red",1000);
// changeColor("green",2000);
// changeColor("brown",3000);

/*callback nesting..... */
// h1=document.querySelector("h1");
// function changeColor(color,time,nextColorChange){
//     setTimeout(()=>{
//         h1.style.color=color;
//         if(nextColorChange) nextColorChange();
//     },time);
// }
// changeColor("red",1000,()=>{
//     changeColor("green",1000,()=>{
//         changeColor("brown",1000,()=>{
//             changeColor("blue",1000,()=>{
//                 changeColor("violet",1000);
//             });
//         });
//     });    
// });
/*callbacks nesting --> callback hell */
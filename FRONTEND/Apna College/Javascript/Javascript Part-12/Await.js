// function getNum(){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             let num=Math.floor(Math.random()*10)+1;
//             console.log(num);
//             resolve();
//         },1000);
//     });
// }

// async function demo(){
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     getNum();
// }


/*Change the color of the text */

// let h1=document.querySelector("h1");
// function changeColor(color,delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             h1.style.color=color;
//             console.log(`color changed to ${color}!`);
//             resolve("color changed!");
//         },delay);
//     });
// }

// async function demo(){
//     await changeColor("red",1000);
//     await changeColor("blue",1000);
//     await changeColor("green",1000);
//     changeColor("orange",1000);
// }

/* handling rejection */
// let h1=document.querySelector("h1");

// function changeColor(color,delay){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let num = Math.floor(Math.random()*10)+1;
//         if(num>3){
//             reject("promise rejected");
//         }

//         h1.style.color=color;
//         console.log(`color changed to ${color}!`);
//         resolve("color changed!");
//     },delay);
// });
// }

// async function demo(){
//     await changeColor("red",1000);
//     await changeColor("blue",1000);
//     await changeColor("brown",1000);
//     await changeColor("orange",1000);
//     changeColor("brown",1000);
// }

/* Handling Rejection with Await */

let h1=document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let num = Math.floor(Math.random()*10)+1;
        if(num>3){
            reject("promise rejected");
        }

        h1.style.color=color;
        console.log(`color changed to ${color}!`);
        resolve("color changed!");
    },delay);
});
}

async function demo(){
    try{
    await changeColor("red",1000);
    await changeColor("blue",1000);
    await changeColor("brown",1000);
    await changeColor("orange",1000);
    changeColor("brown",1000);
    } catch(err){
        console.log("Error caught");
        console.log(err);
    }
}
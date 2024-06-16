/* Accessing Fact through link */

// let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((response)=>{
//     console.log(response);
//     // console.log(response.json());
//     return response.json();
// })
// .then((data)=>{
//     console.log(data);
//     console.log(data.fact);
// })
// .catch((err)=>{
//     console.log("Error - ",err);
// });

/* Accessing two facts together */

// let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log("data1= ", data.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log("data2= ", data.fact);
// })
// .catch((err)=>{
//     console.log("Error - ",err);
// });


/*using Fetch with async/await */
let url = "https://catfact.ninja/fact";

async function getfacts(){
    try{
        let res1 = await fetch(url);
        let data1 = await res1.json();
        console.log("data1 - ", data1.fact);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log("data2 - ", data2.fact);
    } catch (e){
        console.log("Error - ", e);
    }

    console.log("bye");
}
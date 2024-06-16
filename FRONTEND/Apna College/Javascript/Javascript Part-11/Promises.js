// function savetodb(data, success,failure){
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if(internetSpeed>4){
//         success();
//     }else{
//         failure();
//     }
// }

/*promises use in single functions*/

// savetodb("Hello! World",
// ()=>{
//     console.log("Success: your data was saved.....");
// },
// ()=>{
//     console.log("Failure: weak connection. Data not saved....")
// });

/*Promises used in nested functions */
// savetodb("Hello! World",
// ()=>{
//     console.log("Success: your data was saved.....");
//     savetodb("Hello!World",
//     ()=>{
//         console.log("Success 2: your data 2 was saved again.....");
//         savetodb("GG well played",
//         ()=>{
//             console.log("Success 3: your data 3 was saved again again.....");
//         },
//         ()=>{
//             console.log("Failure 3: weak connection. Data 3 not saved....")
//         }
//         );
//     },
//     ()=>{
//         console.log("Failure 2: weak conection.Your data 2 was not saved again.....");
//     }
//     );
// },
// ()=>{
//     console.log("Failure: weak connection. Data not saved....")
// }
// );

/*
Promises using then and catch 
--> .then ------ Fulfilled
--> .catch ------ Rejected(error)
*/

// function savetodb(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if (internetSpeed > 5) {
//             resolve("Data saved successfully");
//         } else {
//             reject("Data save unsuccessfull");
//         }
//     });
// }

// let request = savetodb("Hello!World");
// request.then(()=>{
//     console.log("Promise was resolved");
//     console.log(request);
// })
// .catch(()=>{
//     console.log("Promise was rejected");
//     console.log(request);
// });

/*Improved version */
// savetodb("Hello!World")
// .then((result)=>{
//     console.log("data1 saved");
//     console.log("result of promise:",result);
//     return savetodb("helloworld");
// })
// .then((result)=>{
//     console.log("data2 saved");
//     console.log("result of promise:",result);
//     return savetodb("adarsh");
// })
// .then((result)=>{
//     console.log("data3 saved");
//     console.log("result of promise:",result);
// })
// .catch((error)=>{
//     console.log("Promise was rejected");
//     console.log("Error of promise:",error);         
// });


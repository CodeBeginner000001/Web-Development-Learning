/* checking promise return */
// async function greet(){
//     return "hello";
//     throw "Some random error";
// }

async function greet(){
    return "hello";
    throw "some random error";
}

greet()
 .then((result)=>{
    console.log("Promise was resolved");
    console.log("Result was :",result);
 })
 .catch((err)=>{
    console.log("Promise was rejected with err :",err);
 });


const express = require("express");
const app = express();

// console.dir(app);
let port=8080;
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
})

// app.use((req,res)=>{
//     // console.log(req);
//     console.log("Request received");
   
//     /*Respone can a statement or a sentence */
   
//     // res.send("This is a basic response");
   
//     /* Response can be a object  
//     JSON View extension is used to view on chrome
//     properly
//     */

//     // res.send({
//     //     name:"Apple",
//     //     color:"Green"
//     // });

//     /*Response can be an html page as well */

//     let code="<h1>Fruits</h1> <ul><li>Apple</li><li>Orange</li></ul>";
//     res.send(code);
    
// });

    /* Talking about Routing 
    
    to see the difference between get and post
    use Hoppscotch- it is an open source api client 
    --> To run local host in hoppscotch use need to add 
        chrome extension to it .
    ---> Then u need to add the link of the site u want to 
         test in hoppscotch.

         for example: if i have host something on 
                      local host 3000 or 8080 
            then i habe to add link of the local host i.e.,
            http://localhost:3000 or http://localhost:8080
    
    */
    // app.get("/",(req,res)=>{
    //     res.send("You have contacted root node");
    // })
    // app.get("/apple",(req,res)=>{
    //     res.send("You have contacted apple node");
    // })
    // app.get("/lemon",(req,res)=>{
    //     res.send("You have contacted lemon node");
    // })
    // app.get("/orange",(req,res)=>{
    //     res.send("You have contacted orange node");
    // })
    // app.get("*",(req,res)=>{
    //     res.send("This path doesn't exist");
    // })
    // app.post("/",(req,res)=>{
    //     res.send("You sent a post");
    // })

    /* Understanding about path parameter */
    /* Used for one parameter */
// app.get("/:username",(req,res)=>{
//     console.log(req.params);
//     res.send("Hello, I am root");
// })

    /* Used for two parameter */
// app.get("/:username/:id",(req,res)=>{
//     console.log(req.params);
//     res.send("Hello, I am root");
// })

   /* Using those params */
//    app.get("/",(req,res)=>{
//     res.send("Hello, I am root");
//    })
//    app.get("/:username",(req,res)=>{
//     let {username}=req.params;
//     let htmlWelcome = `<h1>Welcome to the page of @${username}</h1>`
//     res.send(htmlWelcome)
//    })

/* Query Strings */
   app.get("/",(req,res)=>{
    res.send("Hello, I am root");
   })
   app.get("/:username/:id",(req,res)=>{
    let {username}=req.params;
    let htmlWelcome = `<h1>Welcome to the page of @${username}</h1>`
    res.send(htmlWelcome)
   })
   app.get("/search",(req,res)=>{
    let {q}=req.query;
    if(!q){
        res.send("Nothing searched");
    }else{
    res.send(`Search results for query: ${q}`);
    }
   })
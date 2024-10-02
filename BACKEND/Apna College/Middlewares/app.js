const express = require("express");
const app = express();
const port = 3000;

// app.use((req,res,next)=>{
//     console.log("I am 1st middleware");
//     next();
// })
// app.use((req,res,next)=>{
//     console.log("I am 2nd middleware");
//     return next();
//     console.log("I am after next");
// })

// app.use("/api",(req,res,next)=>{
//     let {token} = req.query;
//     if(token ==='giveaccess') 
//     {
//         next();
//     }
//     res.send("Access Denied");
// })
const checktoken = (req,res,next)=>{
        let {token} = req.query;
        if(token ==='giveaccess') 
        {
            next();
        }
        throw new Error("Access Denied");
    }
app.get("/api",checktoken,(req,res)=>{
    res.send("data");
})

// This middleware is only for specific path and if you want to use it for all then just use "/" instead of any path.
app.use("/random",(req,res,next)=>{
    console.log("I am only for random")
    return next();
})

app.get("/",(req,res)=>{
    res.send("I am Root");
})
app.get("/random",(req,res)=>{
    res.send("I am Random");
})

// logger - morgan (middleware hai)
app.use((req,res,next)=>{
    req.time = new Date(Date.now()).toString();
    console.log(req.method,req.hostname,req.path,req.time)
    next();
})
// 404
app.use((req,res,next)=>{
    res.status(404).send("Page not found!")
    return next();
}) 

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})
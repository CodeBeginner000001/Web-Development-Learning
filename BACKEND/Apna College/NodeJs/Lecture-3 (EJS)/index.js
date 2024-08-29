const express= require("express");
const app=express();
const port=3000;
const path = require("path");

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
}) 
app.use(express.static(path.join(__dirname,"/public/js")));
app.use(express.static(path.join(__dirname,"/public/css")));

app.set("view engine","ejs");
app.set("views",path.join("/Users/ashugoyal/Desktop/Web Dev/Learning/BACKEND/Apna College/NodeJs/Lecture-3 (EJS)","/views"));
app.set("views",path.join("/Users/ashugoyal/Desktop/Web Dev/Learning/BACKEND/Apna College/NodeJs/Lecture-3 (EJS)/using_path","/views"));

app.get("/",(req,res)=>{
    res.send("this is home");
})
app.get("/home",(req,res)=>{
    res.render("home.ejs");
})
app.get("/hello",(req,res)=>{
    res.send("hello");
})
app.get("/rolldice",(req,res)=>{
    let diceval = Math.floor(Math.random()*6)+1;
    res.render("rollDice.ejs",{diceval});
})
app.get("/igt/:username",(req,res)=>{
    const follower = ["adam","bob","steve","anchal"];
    let {username}=req.params;
    res.render("instagram_test.ejs",{username,follower});
})

app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    // console.log(data);
    if(data){
        res.render("instagram.ejs",{data});
    } else {
        res.render("error.ejs");
    }
})
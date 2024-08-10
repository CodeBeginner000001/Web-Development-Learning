const express  = require("express");
const app = express();
const port = 3000;

//Used for urlEncoded data for the post request
app.use(express.urlencoded({extended:true}))
// used for JSON file for the post request
app.use(express.json())

app.get("/register",(req,res)=>{
    let {username,password} = req.query;
    res.send(`Accepted GET reqest. Welcome sir ${username}......`);
})
app.post("/register",(req,res)=>{
    let {username,password} = req.body;
    res.send(`Accepted POST reqest. Welcome sir ${username}......`);
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})
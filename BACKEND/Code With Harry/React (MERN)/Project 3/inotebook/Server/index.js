const connectToMongo = require("./db")
const express = require("express")
const app = express();
const cors = require("cors"); // used to connect backend to chrome client
const port = 3004;
connectToMongo();

// making app to use cors
app.use(cors());

// If want to use req.body
app.use(express.json());

// Available Routed
app.use("/api/auth", require('./routes/auth'))
app.use("/api/notes", require('./routes/notes'))

app.get("/",(req,res)=>{
    res.send("Hello World");
})
app.listen(port,()=>{
    console.log(`iNotebook server is running on port ${port}`)
})   
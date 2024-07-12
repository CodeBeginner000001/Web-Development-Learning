import express from "express";
const app = express()
import cors from "cors";
const port = 3000
import {Users} from "../src/users.mjs"

app.use(cors({
  origin: "*"
}))

app.get('/', (req, res) => {
  const { q }=req.query;
  console.log(q)

  const keys=["first_name","last_name","email"]
  const search = (data) => {
    return data.filter(
      (items) =>
        keys.some(key=>items[key].toLowerCase().includes(q))
    );
  };

  res.json(search(Users))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
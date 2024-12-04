const mongoose = require('mongoose');

connectToMongo().catch(err => console.log(err));
connectToMongo().then(()=> console.log("connected to db"))
async function connectToMongo() {
  await mongoose.connect('mongodb://127.0.0.1:27017/inotebook');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
module.exports = connectToMongo;
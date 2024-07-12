const mongoose = require("mongoose");

// const DB = "mongodb+srv://amiya7713:amiya@7713@cluster0.ocdmjxl.mongodb.net/"
// const DB = "mongodb+srv://amiya7713:amiya@7713@cluster0.ocdmjxl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const DB = "mongodb://localhost:27017/"
// const DB = process.env.DATABASE


mongoose.connect(DB, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));
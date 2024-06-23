const express = require("express");
const app = express();
const mongoose = require("mongoose");
const filler = require("./usersTestData.js");
const mongoURL = "mongodb://127.0.0.1:27017/adminDB";

// Connection to mongoDb - [adminDB]
mongoose.connect(mongoURL).then((result)=>{
    console.log("Connected to adminDB successfully - Test Environment");
}).catch((err)=>{
    console.log("Error in connecting with mongoDB - Test Environment");
    console.log(err);
})

// Route : root
app.get("/",(req,res)=>{
    res.send("Welcome to test environment. { /testdata -> insert test data }");
})
// Route : Test data populating
app.get("/testdata",(req,res)=>{
    filler();
    res.send("Test data inserted successfully.");
})

// Listening to test server
app.listen(6111,()=>{
    console.log("Testing Server [Admin Dashboard] listening at port 6111");
})
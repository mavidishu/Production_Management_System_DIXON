const mongoose = require("mongoose");
const mongoURL = "mongodb://127.0.0.1:27017/adminDB";

let connectToDb = ()=>{
    mongoose.connect(mongoURL).then((result)=>{
        console.log("Connected to adminDB successfully");
    }).catch((err)=>{
        console.log("Error in connecting with mongoDB");
        console.log(err);
    })
}

module.exports = connectToDb;
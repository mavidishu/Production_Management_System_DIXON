const express = require("express");
const connectToDb = require("./db.js");

connectToDb();
const app = express();

const PORT  = 5000;

app.get("/",(req,res)=>{
    res.send("Welcome to Admin Dashboard Backend");
})

app.use("/listings",require("./routes/usersRoute.js"));
// Listening to Server
app.listen(PORT,()=>{
    console.log(`Admin dashboard server listening at port ${PORT}`);
})
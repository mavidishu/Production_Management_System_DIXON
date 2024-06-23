const express = require("express");
const connectToDb = require("./db.js");

connectToDb();
const app = express();

const PORT  = 5000;

app.use((req,res,next)=>{
    // cors error resolved:
    res.header('Access-Control-Allow-Origin', '*'); // or 'http://localhost:5000'
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept,auth-token'
    );
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
    next();
  },express.json());// Middleware to get response body as json value.

app.get("/",(req,res)=>{
    res.send("Welcome to Admin Dashboard Backend");
})

app.use("/listings",require("./routes/usersRoute.js"));
// Listening to Server
app.listen(PORT,()=>{
    console.log(`Admin dashboard server listening at port ${PORT}`);
})
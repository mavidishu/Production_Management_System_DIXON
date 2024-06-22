const express = require("express");
const app = express();

const PORT  = 5000;



// Listening to Server
app.listen(PORT,()=>{
    console.log(`Admin dashboard server listening at port ${PORT}`);
})
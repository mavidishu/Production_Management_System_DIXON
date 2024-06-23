const mongoose = require("mongoose");
const express = require("express");
const User = require("../models/User.js");
const router = express.Router();

// Fetch All User
router.get("/user",async(req,res)=>{
    try{
        const users = await User.find();
        res.json(users);
    }catch(err){
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router;
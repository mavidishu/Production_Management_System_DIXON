const express = require("express");
const Transaction = require("../models/Transactions.js");
const router = express.Router();

// Fetch All User
router.get("/items",async(req,res)=>{
    try{
        const transaction = await Transaction.find();
        res.json(transaction);
    }catch(err){
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router;
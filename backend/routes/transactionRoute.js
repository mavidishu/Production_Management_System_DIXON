const express = require("express");
const Transaction = require("../models/Transactions.js");
const router = express.Router();

// Fetch All Transaction
router.get("/items",async(req,res)=>{
    try{
        const transaction = await Transaction.find();
        res.json(transaction);
    }catch(err){
        console.log(err);
        res.sendStatus(500).send("Internal Server Error");
    }
})

// Fetch Daily Sales:
router.get("/dailysales",async(req,res)=>{
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so add 1
    const dd = String(today.getDate()).padStart(2, '0');
    
    const formattedDate = `${yyyy}-${mm}-${dd}`;
    try{
        const result = await Transaction.find({createdAt:formattedDate});
        let dailysales = 0;
        result.map((item)=>{
            dailysales += item.cost
        });
        res.json(dailysales);
    }catch(err){
        console.log(err);
    }
});

router.get("/monthlysales",async(req,res)=>{
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth()).padStart(2, '0'); // Months are zero-based, so add 1
    
    const formattedDate = `${yyyy}-${mm}-01`;
    try{
        const result = await Transaction.find({createdAt:{$lte:formattedDate}});
        const result2 = await Transaction.find();
        let lastMonthSales = 0,totalSales=0;
        result2.map((item)=>{
            totalSales+= item.cost;
        })
        result.map((item)=>{
            lastMonthSales += item.cost
        });
        // console.log("totalSales"+totalSales);
        // console.log("lastMonthSales"+lastMonthSales);
        res.json(totalSales-lastMonthSales);
    }catch(err){
        console.log(err);
    }
})

module.exports = router;
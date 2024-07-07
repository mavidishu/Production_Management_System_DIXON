import express from "express";
import Transaction from "../models/Transactions.mjs";
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

router.get("/year",async(req,res)=>{
    // Make sure to use ISODate() in mongoshShell while inserting data
    try{
        let JanuaryResult = await Transaction.find({ createdAt:{ $gte : new Date("2024-01-01"), $lte: new Date("2024-01-30")}});
        let FebResult = await Transaction.find({ createdAt:{ $gte : new Date("2024-02-01T00:00:00.000Z"), $lte: new Date("2024-02-30T00:00:00.000Z")}});
        let MarchResult = await Transaction.find({createdAt:{ $gte : "2024-03-01", $lte: "2024-03-30"}});
        let AprilResult = await Transaction.find({createdAt:{ $gte : "2024-04-01", $lte: "2024-04-30"}});
        let MayResult = await Transaction.find({createdAt:{ $gte : "2024-05-01", $lte: "2024-05-30"}});
        let JuneResult = await Transaction.find({createdAt:{ $gte : "2024-06-01", $lte: "2024-06-30"}});
        let JulyResult = await Transaction.find({createdAt:{ $gte : "2024-07-01", $lte: "2024-07-30"}});
        let AugustResult = await Transaction.find({createdAt:{ $gte : "2024-08-01", $lte: "2024-08-30"}});
        let SeptResult = await Transaction.find({createdAt:{ $gte : "2024-09-01", $lte: "2024-09-30"}});
        let OctResult = await Transaction.find({createdAt:{ $gte : "2024-10-01", $lte: "2024-10-30"}});
        let NovResult = await Transaction.find({createdAt:{ $gte : "2024-11-01", $lte: "2024-11-30"}});
        let DecResult = await Transaction.find({createdAt:{ $gte : "2024-12-01", $lte: "2024-12-30"}});
        
        let janSales=0,febSales=0,marchSales=0,aprilSales=0,maySales=0,junSales=0,julSales=0,augSales=0,septSales=0,octSales=0,novSales=0,decSales=0;
        JanuaryResult.map((item)=>{
            janSales += item.cost;
        })
        FebResult.map((items)=>{
            febSales += items.cost;
        })
        MarchResult.map((item)=>{
            marchSales += item.cost;
        })
        AprilResult.map((item)=>{
            aprilSales += item.cost;
        })
        MayResult.map((item)=>{
            maySales += item.cost;
        })
        JuneResult.map((item)=>{
            junSales += item.cost;
        })
        JulyResult.map((item)=>{
            julSales += item.cost;
        })
        AugustResult.map((item)=>{
            augSales += item.cost;
        })
        SeptResult.map((item)=>{
            septSales += item.cost;
        })
        OctResult.map((item)=>{
            octSales += item.cost;
        })
        NovResult.map((item)=>{
            novSales += item.cost;
        })
        DecResult.map((item)=>{
            decSales += item.cost;
        })
        let result = [janSales,febSales,marchSales,aprilSales,maySales,junSales,julSales,augSales,septSales,octSales,novSales,decSales];
        res.send(result);
    }catch(err){
        console.log(err);
    }
})

export default router;
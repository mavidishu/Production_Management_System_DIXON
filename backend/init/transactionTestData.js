const Transaction = require("../models/Transactions.js");
const mongoose = require("mongoose");

let transactionsTestData = [
  {
    createdAt: new Date("2024-01-22"),
    status:"Placed",
    cost: 1550
  },
  {
    createdAt: new Date("2024-01-23"),
    status:"Complete",
    cost: 375
  },
  {
    createdAt: new Date("2024-01-24"),
    status:"Placed",
    cost: 700
  },
  {
    createdAt: new Date("2024-02-25"),
    status:"Pending",
    cost: 360
  },
  {
    createdAt: new Date("2024-02-26"),
    status:"Pending",
    cost: 310
  },
  {
    createdAt: new Date("2024-02-27"),
    status:"Complete",
    cost: 250
  },
  {
    createdAt: new Date("2024-03-28"),
    status:"Pending",
    cost: 920
  },
  {
    createdAt: new Date("2024-03-29"),
    status:"Pending",
    cost: 460
  },
  {
    createdAt: new Date("2024-04-30"),
    status:"Complete",
    cost: 350
  },
  {
    createdAt: new Date("2024-04-01"),
    status:"Placed",
    cost: 170
  },
  {
    createdAt: new Date("2024-05-02"),
    status:"Pending",
    cost: 110
  },
  {
    createdAt: new Date("2024-05-03"),
    status:"Pending",
    cost: 150
  },
  {
    createdAt: new Date("2024-06-04"),
    status:"Pending",
    cost: 600
  },
  {
    createdAt: new Date("2024-07-05"),
    status:"Placed",
    cost: 75
  },
  {
    createdAt: new Date("2024-07-06"),
    status:"Completed",
    cost: 240
  },
  {
    createdAt: new Date("2024-08-07"),
    status:"Pending",
    cost: 800
  },
  {
    createdAt: new Date("2024-08-08"),
    status:"Placed",
    cost: 240
  },
  {
    createdAt: new Date("2024-09-09"),
    status:"Complete",
    cost: 250
  },
  {
    createdAt: new Date("2024-09-19"),
    status:"Pending",
    cost: 824,
  },
  {
    createdAt: new Date("2024-09-29"),
    status:"Placed",
    cost: 478
  },
  {
    createdAt: new Date("2024-10-04"),
    status:"Complete",
    cost: 1100
  },
  {
    createdAt: new Date("2024-10-09"),
    status:"Complete",
    cost: 500
  },
  {
    createdAt: new Date("2024-10-22"),
    status:"Complete",
    cost: 1500
  },
  {
    createdAt: new Date("2024-11-01"),
    status:"Complete",
    cost: 1250
  },
  {
    createdAt: new Date("2024-11-15"),
    status:"Pending",
    cost: 450
  },
  {
    createdAt: new Date("2024-11-27"),
    status:"Ordered",
    cost: 250
  },
  {
    createdAt: new Date("2024-12-04"),
    status:"Complete",
    cost: 920
  },
  {
    createdAt: new Date("2024-12-11"),
    status:"Pending",
    cost: 666
  },
  {
    createdAt: new Date("2024-12-12"),
    status:"Complete",
    cost: 213
  }
];

let transactionFiller = async()=>{
  let productId1 = new mongoose.Types.ObjectId("667be02dc8096a79383a3111");
  let productId2 = new mongoose.Types.ObjectId("667be02dc8096a79383a3110");
  let productId3 = new mongoose.Types.ObjectId("667be02dc8096a79383a3106");
    await Transaction.deleteMany({});
    transactionsTestData = transactionsTestData.map((item)=> ({...item,userId:"6678684172a334672868983f",productList:[productId1,productId2,productId3]}));
    Transaction.insertMany(transactionsTestData).then(()=>{
        console.log("transaction test data filled successfully");
    }).catch((err)=>{
        console.log("Err - Transaction Test Filler");
        console.log(err);
    })
}

module.exports = transactionFiller;
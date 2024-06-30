const Transaction = require("../models/Transactions.js");
const mongoose = require("mongoose");

let transactionsTestData = [
  {
    createdAt: new Date("2024-06-22"),
    status:"Placed",
    cost: 1550
  },
  {
    createdAt: new Date("2024-06-23"),
    status:"Complete",
    cost: 375
  },
  {
    createdAt: new Date("2024-06-24"),
    status:"Placed",
    cost: 700
  },
  {
    createdAt: new Date("2024-06-25"),
    status:"Pending",
    cost: 360
  },
  {
    createdAt: new Date("2024-06-26"),
    status:"Pending",
    cost: 310
  },
  {
    createdAt: new Date("2024-06-27"),
    status:"Complete",
    cost: 250
  },
  {
    createdAt: new Date("2024-06-28"),
    status:"Pending",
    cost: 920
  },
  {
    createdAt: new Date("2024-06-29"),
    status:"Pending",
    cost: 460
  },
  {
    createdAt: new Date("2024-06-30"),
    status:"Complete",
    cost: 350
  },
  {
    createdAt: new Date("2024-07-01"),
    status:"Placed",
    cost: 170
  },
  {
    createdAt: new Date("2024-07-02"),
    status:"Pending",
    cost: 110
  },
  {
    createdAt: new Date("2024-07-03"),
    status:"Pending",
    cost: 150
  },
  {
    createdAt: new Date("2024-07-04"),
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
    createdAt: new Date("2024-07-07"),
    status:"Pending",
    cost: 800
  },
  {
    createdAt: new Date("2024-07-08"),
    status:"Placed",
    cost: 240
  },
  {
    createdAt: new Date("2024-07-09"),
    status:"Complete",
    cost: 250
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
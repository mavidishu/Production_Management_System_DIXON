const Transaction = require("../models/Transactions.js");
const mongoose = require("mongoose");

const transactionsTestData = [
    {
      userId: new mongoose.Types.ObjectId(),
      createdAt: '2024-01-01',
      noOfProducts: 3,
      cost: 150.75
    },
    {
      userId: new mongoose.Types.ObjectId(),
      createdAt: '2024-01-02',
      noOfProducts: 1,
      cost: 75.00
    },
    {
      userId: new mongoose.Types.ObjectId(),
      createdAt: '2024-01-03',
      noOfProducts: 2,
      cost: 120.50
    },
    {
      userId: new mongoose.Types.ObjectId(),
      createdAt: '2024-01-04',
      noOfProducts: 4,
      cost: 200.00
    },
    {
      userId: new mongoose.Types.ObjectId(),
      createdAt: '2024-01-05',
      noOfProducts: 2,
      cost: 95.25
    },
    {
      userId: new mongoose.Types.ObjectId(),
      createdAt: '2024-01-06',
      noOfProducts: 3,
      cost: 140.00
    },
    {
      userId: new mongoose.Types.ObjectId(),
      createdAt: '2024-01-07',
      noOfProducts: 5,
      cost: 250.00
    },
    {
      userId: new mongoose.Types.ObjectId(),
      createdAt: '2024-01-08',
      noOfProducts: 1,
      cost: 50.00
    },
    {
      userId: new mongoose.Types.ObjectId(),
      createdAt: '2024-01-09',
      noOfProducts: 2,
      cost: 100.00
    },
    {
      userId: new mongoose.Types.ObjectId(),
      createdAt: '2024-01-10',
      noOfProducts: 3,
      cost: 170.00
    },
    {
      userId: new mongoose.Types.ObjectId() ,
      createdAt: '2024-01-11',
      noOfProducts: 4,
      cost: 220.75
    },
    {
      userId: new mongoose.Types.ObjectId() ,
      createdAt: '2024-01-12',
      noOfProducts: 2,
      cost: 80.50
    },
    {
      userId: new mongoose.Types.ObjectId() ,
      createdAt: '2024-01-13',
      noOfProducts: 5,
      cost: 260.00
    },
    {
      userId: new mongoose.Types.ObjectId() ,
      createdAt: '2024-01-14',
      noOfProducts: 3,
      cost: 145.00
    },
    {
      userId: new mongoose.Types.ObjectId() ,
      createdAt: '2024-01-15',
      noOfProducts: 1,
      cost: 60.00
    },
    {
      userId: new mongoose.Types.ObjectId() ,
      createdAt: '2024-06-24',
      noOfProducts: 4,
      cost: 210.50
    },
    {
      userId: new mongoose.Types.ObjectId() ,
      createdAt: '2024-06-24',
      noOfProducts: 2,
      cost: 85.75
    },
    {
      userId: new mongoose.Types.ObjectId() ,
      createdAt: '2024-01-18',
      noOfProducts: 3,
      cost: 155.00
    },
    {
      userId: new mongoose.Types.ObjectId() ,
      createdAt: '2024-01-19',
      noOfProducts: 1,
      cost: 70.00
    },
    {
      userId: new mongoose.Types.ObjectId(),
      createdAt: '2024-01-20',
      noOfProducts: 5,
      cost: 275.25
    }
  ];

let transactionFiller = async()=>{
    await Transaction.deleteMany({});
    Transaction.insertMany(transactionsTestData).then(()=>{
        console.log("transaction test data filled successfully");
    }).catch((err)=>{
        console.log("Err - Transaction Test Filler");
        console.log(err);
    })
}

module.exports = transactionFiller;
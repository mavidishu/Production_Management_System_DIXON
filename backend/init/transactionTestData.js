const Transaction = require("../models/Transactions.js");
const mongoose = require("mongoose");

const transactionsTestData = [
    {
      userId: new mongoose.Types.ObjectId(),
      createdAt: '2024-01-01T12:00:00.000Z',
      noOfProducts: 3,
      cost: 150.75
    },
    {
      userId: new mongoose.Types.ObjectId(),
      createdAt: '2024-01-02T08:30:00.000Z',
      noOfProducts: 1,
      cost: 75.00
    },
    {
      userId: new mongoose.Types.ObjectId(),
      createdAt: '2024-01-03T14:45:00.000Z',
      noOfProducts: 2,
      cost: 120.50
    },
    {
      userId: new mongoose.Types.ObjectId(),
      createdAt: '2024-01-04T09:15:00.000Z',
      noOfProducts: 4,
      cost: 200.00
    },
    {
      userId: new mongoose.Types.ObjectId(),
      createdAt: '2024-01-05T16:30:00.000Z',
      noOfProducts: 2,
      cost: 95.25
    },
    {
      userId: new mongoose.Types.ObjectId(),
      createdAt: '2024-01-06T11:45:00.000Z',
      noOfProducts: 3,
      cost: 140.00
    },
    {
      userId: new mongoose.Types.ObjectId(),
      createdAt: '2024-01-07T10:30:00.000Z',
      noOfProducts: 5,
      cost: 250.00
    },
    {
      userId: new mongoose.Types.ObjectId(),
      createdAt: '2024-01-08T13:00:00.000Z',
      noOfProducts: 1,
      cost: 50.00
    },
    {
      userId: new mongoose.Types.ObjectId(),
      createdAt: '2024-01-09T15:15:00.000Z',
      noOfProducts: 2,
      cost: 100.00
    },
    {
      userId: new mongoose.Types.ObjectId(),
      createdAt: '2024-01-10T08:45:00.000Z',
      noOfProducts: 3,
      cost: 170.00
    },
    {
      userId: new mongoose.Types.ObjectId() ,
      createdAt: '2024-01-11T14:00:00.000Z',
      noOfProducts: 4,
      cost: 220.75
    },
    {
      userId: new mongoose.Types.ObjectId() ,
      createdAt: '2024-01-12T09:30:00.000Z',
      noOfProducts: 2,
      cost: 80.50
    },
    {
      userId: new mongoose.Types.ObjectId() ,
      createdAt: '2024-01-13T12:15:00.000Z',
      noOfProducts: 5,
      cost: 260.00
    },
    {
      userId: new mongoose.Types.ObjectId() ,
      createdAt: '2024-01-14T16:45:00.000Z',
      noOfProducts: 3,
      cost: 145.00
    },
    {
      userId: new mongoose.Types.ObjectId() ,
      createdAt: '2024-01-15T11:30:00.000Z',
      noOfProducts: 1,
      cost: 60.00
    },
    {
      userId: new mongoose.Types.ObjectId() ,
      createdAt: '2024-01-16T10:00:00.000Z',
      noOfProducts: 4,
      cost: 210.50
    },
    {
      userId: new mongoose.Types.ObjectId() ,
      createdAt: '2024-01-17T14:30:00.000Z',
      noOfProducts: 2,
      cost: 85.75
    },
    {
      userId: new mongoose.Types.ObjectId() ,
      createdAt: '2024-01-18T09:15:00.000Z',
      noOfProducts: 3,
      cost: 155.00
    },
    {
      userId: new mongoose.Types.ObjectId() ,
      createdAt: '2024-01-19T13:45:00.000Z',
      noOfProducts: 1,
      cost: 70.00
    },
    {
      userId: new mongoose.Types.ObjectId(),
      createdAt: '2024-01-20T15:00:00.000Z',
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
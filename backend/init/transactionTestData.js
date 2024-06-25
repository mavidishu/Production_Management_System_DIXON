const Transaction = require("../models/Transactions.js");
const mongoose = require("mongoose");

const transactionsTestData = [
  {
    userId: "60b6a1e1c25e5e1f4c4c9d0a",
    createdAt: new Date("2024-06-22"),
    noOfProducts: 3,
    productList: [
      { productId: "60b6a1e1c25e5e1f4c4c9d0b", productCategory:"Electronics", productName: "Laptop", count: 1, price: 1500 },
      { productId: "60b6a1e1c25e5e1f4c4c9d0c", productCategory:"Electronics", productName: "Mouse", count: 2, price: 25 }
    ],
    cost: 1550
  },
  {
    userId: "60b6a1e1c25e5e1f4c4c9d0d",
    createdAt: new Date("2024-06-23"),
    noOfProducts: 2,
    productList: [
      { productId: "60b6a1e1c25e5e1f4c4c9d0e", productCategory:"Electronics", productName: "Keyboard", count: 1, price: 75 },
      { productId: "60b6a1e1c25e5e1f4c4c9d0f", productCategory:"Electronics", productName: "Monitor", count: 1, price: 300 }
    ],
    cost: 375
  },
  {
    userId: "60b6a1e1c25e5e1f4c4c9d10",
    createdAt: new Date("2024-06-24"),
    noOfProducts: 1,
    productList: [
      { productId: "60b6a1e1c25e5e1f4c4c9d11", productCategory:"Electronics", productName: "Smartphone", count: 1, price: 700 }
    ],
    cost: 700
  },
  {
    userId: "60b6a1e1c25e5e1f4c4c9d12",
    createdAt: new Date("2024-06-25"),
    noOfProducts: 4,
    productList: [
      { productId: "60b6a1e1c25e5e1f4c4c9d13", productCategory:"Electronics", productName: "Tablet", count: 1, price: 300 },
      { productId: "60b6a1e1c25e5e1f4c4c9d14", productCategory:"Electronics", productName: "Charger", count: 3, price: 20 }
    ],
    cost: 360
  },
  {
    userId: "60b6a1e1c25e5e1f4c4c9d15",
    createdAt: new Date("2024-06-26"),
    noOfProducts: 3,
    productList: [
      { productId: "60b6a1e1c25e5e1f4c4c9d16", productCategory:"Electronics", productName: "Headphones", count: 2, price: 150 },
      { productId: "60b6a1e1c25e5e1f4c4c9d17", productCategory:"Electronics", productName: "USB Cable", count: 1, price: 10 }
    ],
    cost: 310
  },
  {
    userId: "60b6a1e1c25e5e1f4c4c9d18",
    createdAt: new Date("2024-06-27"),
    noOfProducts: 2,
    productList: [
      { productId: "60b6a1e1c25e5e1f4c4c9d19", productCategory:"Electronics", productName: "Smartwatch", count: 1, price: 200 },
      { productId: "60b6a1e1c25e5e1f4c4c9d1a", productCategory:"Electronics", productName: "Fitness Band", count: 1, price: 50 }
    ],
    cost: 250
  },
  {
    userId: "60b6a1e1c25e5e1f4c4c9d1b",
    createdAt: new Date("2024-06-28"),
    noOfProducts: 5,
    productList: [
      { productId: "60b6a1e1c25e5e1f4c4c9d1c", productCategory:"Electronics", productName: "Camera", count: 1, price: 500 },
      { productId: "60b6a1e1c25e5e1f4c4c9d1d", productCategory:"Electronics", productName: "Lens", count: 2, price: 150 },
      { productId: "60b6a1e1c25e5e1f4c4c9d1e", productCategory:"Electronics", productName: "Tripod", count: 1, price: 100 },
      { productId: "60b6a1e1c25e5e1f4c4c9d1f", productCategory:"Electronics", productName: "Memory Card", count: 1, price: 20 }
    ],
    cost: 920
  },
  {
    userId: "60b6a1e1c25e5e1f4c4c9d20",
    createdAt: new Date("2024-06-29"),
    noOfProducts: 2,
    productList: [
      { productId: "60b6a1e1c25e5e1f4c4c9d21", productCategory:"Electronics", productName: "Gaming Console", count: 1, price: 400 },
      { productId: "60b6a1e1c25e5e1f4c4c9d22", productCategory:"Electronics", productName: "Game Controller", count: 1, price: 60 }
    ],
    cost: 460
  },
  {
    userId: "60b6a1e1c25e5e1f4c4c9d23",
    createdAt: new Date("2024-06-30"),
    noOfProducts: 1,
    productList: [
      { productId: "60b6a1e1c25e5e1f4c4c9d24", productCategory:"Electronics", productName: "VR Headset", count: 1, price: 350 }
    ],
    cost: 350
  },
  {
    userId: "60b6a1e1c25e5e1f4c4c9d25",
    createdAt: new Date("2024-07-01"),
    noOfProducts: 3,
    productList: [
      { productId: "60b6a1e1c25e5e1f4c4c9d26", productCategory:"PDF", productName: "E-reader", count: 1, price: 150 },
      { productId: "60b6a1e1c25e5e1f4c4c9d27", productCategory:"PDF", productName: "E-book", count: 2, price: 10 }
    ],
    cost: 170
  },
  {
    userId: "60b6a1e1c25e5e1f4c4c9d28",
    createdAt: new Date("2024-07-02"),
    noOfProducts: 4,
    productList: [
      { productId: "60b6a1e1c25e5e1f4c4c9d29", productCategory:"Electronics", productName: "Router", count: 1, price: 80 },
      { productId: "60b6a1e1c25e5e1f4c4c9d2a", productCategory:"Electronics", productName: "Ethernet Cable", count: 3, price: 10 }
    ],
    cost: 110
  },
  {
    userId: "60b6a1e1c25e5e1f4c4c9d2b",
    createdAt: new Date("2024-07-03"),
    noOfProducts: 2,
    productList: [
      { productId: "60b6a1e1c25e5e1f4c4c9d2c", productCategory:"Electronics", productName: "External Hard Drive", count: 1, price: 120 },
      { productId: "60b6a1e1c25e5e1f4c4c9d2d", productCategory:"Electronics", productName: "Flash Drive", count: 1, price: 30 }
    ],
    cost: 150
  },
  {
    userId: "60b6a1e1c25e5e1f4c4c9d2e",
    createdAt: new Date("2024-07-04"),
    noOfProducts: 1,
    productList: [
      { productId: "60b6a1e1c25e5e1f4c4c9d2f", productCategory:"Electronics", productName: "Projector", count: 1, price: 600 }
    ],
    cost: 600
  },
  {
    userId: "60b6a1e1c25e5e1f4c4c9d30",
    createdAt: new Date("2024-07-05"),
    noOfProducts: 3,
    productList: [
      { productId: "60b6a1e1c25e5e1f4c4c9d31", productCategory:"Electronics", productName: "Smart Light Bulb", count: 3, price: 25 }
    ],
    cost: 75
  },
  {
    userId: "60b6a1e1c25e5e1f4c4c9d32",
    createdAt: new Date("2024-07-06"),
    noOfProducts: 2,
    productList: [
      { productId: "60b6a1e1c25e5e1f4c4c9d33", productCategory:"Electronics", productName: "Smart Thermostat", count: 1, price: 200 },
      { productId: "60b6a1e1c25e5e1f4c4c9d34", productCategory:"Electronics", productName: "Smart Plug", count: 1, price: 40 }
    ],
    cost: 240
  },
  {
    userId: "60b6a1e1c25e5e1f4c4c9d35",
    createdAt: new Date("2024-07-07"),
    noOfProducts: 1,
    productList: [
      { productId: "60b6a1e1c25e5e1f4c4c9d36", productCategory:"Electronics", productName: "3D Printer", count: 1, price: 800 }
    ],
    cost: 800
  },
  {
    userId: "60b6a1e1c25e5e1f4c4c9d37",
    createdAt: new Date("2024-07-08"),
    noOfProducts: 4,
    productList: [
      { productId: "60b6a1e1c25e5e1f4c4c9d38", productCategory:"Electronics", productName: "Security Camera", count: 2, price: 100 },
      { productId: "60b6a1e1c25e5e1f4c4c9d39", productCategory:"Electronics", productName: "Door Sensor", count: 2, price: 20 }
    ],
    cost: 240
  },
  {
    userId: "60b6a1e1c25e5e1f4c4c9d3a",
    createdAt: new Date("2024-07-09"),
    noOfProducts: 2,
    productList: [
      { productId: "60b6a1e1c25e5e1f4c4c9d3b", productCategory:"Electronics", productName: "Smart Speaker", count: 1, price: 100 },
      { productId: "60b6a1e1c25e5e1f4c4c9d3c", productCategory:"Electronics", productName: "Smart Display", count: 1, price: 150 }
    ],
    cost: 250
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
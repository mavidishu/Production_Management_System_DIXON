const Product = require("../models/Products.js");

const productsTestData = [
    {
      productName: "Smartphone XYZ",
      productCategory: "Electronics",
      productDetails: "6.5-inch display, 128GB storage, 48MP camera",
      price: 699.99,
      warrantyStatus: "2 years",
      payOnDelivery: true,
      registeredDate: "2024-01-15"
    },
    {
      productName: "Laptop ABC",
      productCategory: "Computers",
      productDetails: "15.6-inch display, 256GB SSD, 8GB RAM",
      price: 1099.99,
      warrantyStatus: "1 year",
      payOnDelivery: false,
      registeredDate: "2024-02-20"
    },
    {
      productName: "Wireless Headphones",
      productCategory: "Audio",
      productDetails: "Bluetooth 5.0, Noise-cancelling, 20-hour battery life",
      price: 199.99,
      warrantyStatus: "6 months",
      payOnDelivery: true,
      registeredDate: "2024-03-10"
    },
    {
      productName: "Smartwatch Pro",
      productCategory: "Wearables",
      productDetails: "1.4-inch display, GPS, Heart-rate monitor",
      price: 299.99,
      warrantyStatus: "1 year",
      payOnDelivery: false,
      registeredDate: "2024-04-05"
    },
    {
      productName: "Gaming Console",
      productCategory: "Gaming",
      productDetails: "8-core CPU, 16GB RAM, 1TB SSD",
      price: 499.99,
      warrantyStatus: "2 years",
      payOnDelivery: true,
      registeredDate: "2024-01-25"
    },
    {
      productName: "4K Television",
      productCategory: "Home Appliances",
      productDetails: "55-inch display, HDR, Smart TV",
      price: 799.99,
      warrantyStatus: "3 years",
      payOnDelivery: false,
      registeredDate: "2024-02-15"
    },
    {
      productName: "Bluetooth Speaker",
      productCategory: "Audio",
      productDetails: "10W output, Waterproof, 12-hour battery life",
      price: 59.99,
      warrantyStatus: "1 year",
      payOnDelivery: true,
      registeredDate: "2024-03-18"
    },
    {
      productName: "Digital Camera",
      productCategory: "Photography",
      productDetails: "24MP sensor, 4K video recording, 18-55mm lens",
      price: 499.99,
      warrantyStatus: "2 years",
      payOnDelivery: false,
      registeredDate: "2024-04-01"
    },
    {
      productName: "Microwave Oven",
      productCategory: "Kitchen Appliances",
      productDetails: "1000W power, 30L capacity, Touch control",
      price: 129.99,
      warrantyStatus: "1 year",
      payOnDelivery: true,
      registeredDate: "2024-01-20"
    },
    {
      productName: "Fitness Tracker",
      productCategory: "Wearables",
      productDetails: "0.96-inch display, Heart-rate monitor, Sleep tracking",
      price: 49.99,
      warrantyStatus: "6 months",
      payOnDelivery: false,
      registeredDate: "2024-02-28"
    },
    {
      productName: "Electric Kettle",
      productCategory: "Kitchen Appliances",
      productDetails: "1.7L capacity, Auto shut-off, Stainless steel",
      price: 39.99,
      warrantyStatus: "1 year",
      payOnDelivery: true,
      registeredDate: "2024-03-22"
    },
    {
      productName: "Air Purifier",
      productCategory: "Home Appliances",
      productDetails: "HEPA filter, 4-speed settings, 20 sq.m coverage",
      price: 149.99,
      warrantyStatus: "2 years",
      payOnDelivery: false,
      registeredDate: "2024-04-10"
    },
    {
      productName: "Cordless Vacuum Cleaner",
      productCategory: "Home Appliances",
      productDetails: "120W suction power, 60-minute runtime, Lightweight",
      price: 199.99,
      warrantyStatus: "1 year",
      payOnDelivery: true,
      registeredDate: "2024-01-30"
    },
    {
      productName: "Electric Toothbrush",
      productCategory: "Personal Care",
      productDetails: "2-minute timer, Rechargeable, 5 brushing modes",
      price: 79.99,
      warrantyStatus: "6 months",
      payOnDelivery: false,
      registeredDate: "2024-02-10"
    },
    {
      productName: "Smart Thermostat",
      productCategory: "Home Automation",
      productDetails: "Wi-Fi enabled, Voice control, Energy saving",
      price: 129.99,
      warrantyStatus: "2 years",
      payOnDelivery: true,
      registeredDate: "2024-03-05"
    },
    {
      productName: "Noise-Cancelling Earbuds",
      productCategory: "Audio",
      productDetails: "Bluetooth 5.0, 8-hour battery life, Charging case",
      price: 149.99,
      warrantyStatus: "1 year",
      payOnDelivery: false,
      registeredDate: "2024-04-20"
    },
    {
      productName: "Portable Hard Drive",
      productCategory: "Computers",
      productDetails: "1TB storage, USB 3.0, Shock resistant",
      price: 89.99,
      warrantyStatus: "3 years",
      payOnDelivery: true,
      registeredDate: "2024-01-18"
    },
    {
      productName: "Smart Light Bulb",
      productCategory: "Home Automation",
      productDetails: "Wi-Fi enabled, Voice control, RGB colors",
      price: 29.99,
      warrantyStatus: "1 year",
      payOnDelivery: false,
      registeredDate: "2024-02-25"
    },
    {
      productName: "Electric Shaver",
      productCategory: "Personal Care",
      productDetails: "Wet & dry use, Rechargeable, 3 shaving heads",
      price: 99.99,
      warrantyStatus: "1 year",
      payOnDelivery: true,
      registeredDate: "2024-03-15"
    },
    {
      productName: "Air Fryer",
      productCategory: "Kitchen Appliances",
      productDetails: "4.5L capacity, Digital display, Oil-free cooking",
      price: 149.99,
      warrantyStatus: "2 years",
      payOnDelivery: false,
      registeredDate: "2024-04-12"
    }
  ];

let productFiller = async()=>{
    await Product.deleteMany({});
    Product.insertMany(productsTestData).then(()=>{
        console.log("product test data inserted successfully");
    }).catch((err)=>{
        console.log(err);
    })
}

module.exports = productFiller;
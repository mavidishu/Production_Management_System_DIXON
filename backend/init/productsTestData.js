const Product = require("../models/Products.js");

const productsTestData = [
    {
      productName:"Samsung MX555",
      auditDate:new Date("2024-05-15"),
      targetDate:new Date("2024-07-15"),
      production:50000,
      productDetails:"Samsung A55 5G 6GB Ram 128GB Storage",
      productPrice:29999,
      budget:1000000000,
      status:false,
    },
    {
      productName:"Nokia D8999",
      auditDate:new Date("2024-03-15"),
      targetDate:new Date("2024-05-15"),
      production:2000,
      productDetails:"Nokia Keypad D8999 Mutimedia Camera Bluetooth Dualsim",
      productPrice:5000,
      budget:10000000,
      status:false,
    },
    {
      productName:"Boat Earbuds M5G7",
      auditDate:new Date("2024-01-15"),
      targetDate:new Date("2024-03-15"),
      production:50000,
      productDetails:"Boat Earbuds perfect noise cancellation, 24 hours playback, Black matte color",
      productPrice:1999,
      budget:50000000,
      status:false,
    },
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
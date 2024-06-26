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
      productCategory: "Electronics",
      productDetails: "15.6-inch display, 256GB SSD, 8GB RAM",
      price: 1099.99,
      warrantyStatus: "1 year",
      payOnDelivery: false,
      registeredDate: "2024-02-20"
    },
    {
      productName: "Wireless Headphones",
      productCategory: "Electronics",
      productDetails: "Bluetooth 5.0, Noise-cancelling, 20-hour battery life",
      price: 199.99,
      warrantyStatus: "6 months",
      payOnDelivery: true,
      registeredDate: "2024-03-10"
    },
    {
      productName: "Smartwatch Pro",
      productCategory: "Electronics",
      productDetails: "1.4-inch display, GPS, Heart-rate monitor",
      price: 299.99,
      warrantyStatus: "1 year",
      payOnDelivery: false,
      registeredDate: "2024-04-05"
    },
    {
      productName: "Gaming Console",
      productCategory: "Electronics",
      productDetails: "8-core CPU, 16GB RAM, 1TB SSD",
      price: 499.99,
      warrantyStatus: "2 years",
      payOnDelivery: true,
      registeredDate: "2024-01-25"
    },
    {
      productName: "4K Television",
      productCategory: "Electronics",
      productDetails: "55-inch display, HDR, Smart TV",
      price: 799.99,
      warrantyStatus: "3 years",
      payOnDelivery: false,
      registeredDate: "2024-02-15"
    },
    {
      productName: "Bluetooth Speaker",
      productCategory: "Electronics",
      productDetails: "10W output, Waterproof, 12-hour battery life",
      price: 59.99,
      warrantyStatus: "1 year",
      payOnDelivery: true,
      registeredDate: "2024-03-18"
    },
    {
      productName: "Digital Camera",
      productCategory: "Electronics",
      productDetails: "24MP sensor, 4K video recording, 18-55mm lens",
      price: 499.99,
      warrantyStatus: "2 years",
      payOnDelivery: false,
      registeredDate: "2024-04-01"
    },
    {
      productName: "Microwave Oven",
      productCategory: "Electronics",
      productDetails: "1000W power, 30L capacity, Touch control",
      price: 129.99,
      warrantyStatus: "1 year",
      payOnDelivery: true,
      registeredDate: "2024-01-20"
    },
    {
      productName: "Fitness Tracker",
      productCategory: "Electronics",
      productDetails: "0.96-inch display, Heart-rate monitor, Sleep tracking",
      price: 49.99,
      warrantyStatus: "6 months",
      payOnDelivery: false,
      registeredDate: "2024-02-28"
    },
    {
      productName: "Electric Kettle",
      productCategory: "Electronics",
      productDetails: "1.7L capacity, Auto shut-off, Stainless steel",
      price: 39.99,
      warrantyStatus: "1 year",
      payOnDelivery: true,
      registeredDate: "2024-03-22"
    },
    {
      productName: "Air Purifier",
      productCategory: "Electronics",
      productDetails: "HEPA filter, 4-speed settings, 20 sq.m coverage",
      price: 149.99,
      warrantyStatus: "2 years",
      payOnDelivery: false,
      registeredDate: "2024-04-10"
    },
    {
      productName: "Cordless Vacuum Cleaner",
      productCategory: "Electronics",
      productDetails: "120W suction power, 60-minute runtime, Lightweight",
      price: 199.99,
      warrantyStatus: "1 year",
      payOnDelivery: true,
      registeredDate: "2024-01-30"
    },
    {
      productName: "Electric Toothbrush",
      productCategory: "Electronics",
      productDetails: "2-minute timer, Rechargeable, 5 brushing modes",
      price: 79.99,
      warrantyStatus: "6 months",
      payOnDelivery: false,
      registeredDate: "2024-02-10"
    },
    {
      productName: "Smart Thermostat",
      productCategory: "Electronics",
      productDetails: "Wi-Fi enabled, Voice control, Energy saving",
      price: 129.99,
      warrantyStatus: "2 years",
      payOnDelivery: true,
      registeredDate: "2024-03-05"
    },
    {
      productName: "Noise-Cancelling Earbuds",
      productCategory: "Electronics",
      productDetails: "Bluetooth 5.0, 8-hour battery life, Charging case",
      price: 149.99,
      warrantyStatus: "1 year",
      payOnDelivery: false,
      registeredDate: "2024-04-20"
    },
    {
      productName: "Portable Hard Drive",
      productCategory: "Electronics",
      productDetails: "1TB storage, USB 3.0, Shock resistant",
      price: 89.99,
      warrantyStatus: "3 years",
      payOnDelivery: true,
      registeredDate: "2024-01-18"
    },
    {
      productName: "Smart Light Bulb",
      productCategory: "Electronics",
      productDetails: "Wi-Fi enabled, Voice control, RGB colors",
      price: 29.99,
      warrantyStatus: "1 year",
      payOnDelivery: false,
      registeredDate: "2024-02-25"
    },
    {
      productName: "Electric Shaver",
      productCategory: "Electronics",
      productDetails: "Wet & dry use, Rechargeable, 3 shaving heads",
      price: 99.99,
      warrantyStatus: "1 year",
      payOnDelivery: true,
      registeredDate: "2024-03-15"
    },
    {
      productName: "Air Fryer",
      productCategory: "Electronics",
      productDetails: "4.5L capacity, Digital display, Oil-free cooking",
      price: 149.99,
      warrantyStatus: "2 years",
      payOnDelivery: false,
      registeredDate: "2024-04-12"
    },
    {
      productName: "Organic Almonds",
      productCategory: "Food",
      productDetails: "500g, Non-GMO, Gluten-free",
      price: 15.99,
      warrantyStatus: "N/A",
      payOnDelivery: true,
      registeredDate: "2024-01-15"
    },
    {
      productName: "Honey",
      productCategory: "Food",
      productDetails: "1kg, Raw, Unfiltered",
      price: 12.49,
      warrantyStatus: "N/A",
      payOnDelivery: true,
      registeredDate: "2024-02-10"
    },
    {
      productName: "Organic Quinoa",
      productCategory: "Food",
      productDetails: "1kg, Non-GMO, Gluten-free",
      price: 9.99,
      warrantyStatus: "N/A",
      payOnDelivery: false,
      registeredDate: "2024-03-22"
    },
    {
      productName: "Pasta Sauce",
      productCategory: "Food",
      productDetails: "500ml, No added sugar, Vegan",
      price: 6.49,
      warrantyStatus: "N/A",
      payOnDelivery: true,
      registeredDate: "2024-05-18"
    },
    {
      productName: "Dark Chocolate",
      productCategory: "Food",
      productDetails: "200g, 70% Cocoa, Organic",
      price: 4.99,
      warrantyStatus: "N/A",
      payOnDelivery: false,
      registeredDate: "2024-04-05"
    },
    {
      productName: "Red Tape Sneakers",
      productCategory: "Fashion",
      productDetails: "Men's Sneakers, Size 10, White",
      brand: "Red Tape",
      price: 59.99,
      warrantyStatus: "1 year",
      payOnDelivery: true,
      registeredDate: "2024-01-20"
    },
    {
      productName: "Numero Uno Jeans",
      productCategory: "Fashion",
      productDetails: "Men's Slim Fit Jeans, Size 32, Blue",
      brand: "Numero Uno",
      price: 45.99,
      warrantyStatus: "6 months",
      payOnDelivery: true,
      registeredDate: "2024-02-12"
    },
    {
      productName: "US Polo T-shirt",
      productCategory: "Fashion",
      productDetails: "Men's Polo T-shirt, Size L, Black",
      brand: "US Polo",
      price: 29.99,
      warrantyStatus: "N/A",
      payOnDelivery: false,
      registeredDate: "2024-03-15"
    },
    {
      productName: "Gucci Sunglasses",
      productCategory: "Fashion",
      productDetails: "Unisex, UV Protection, Black",
      brand: "Gucci",
      price: 199.99,
      warrantyStatus: "2 years",
      payOnDelivery: true,
      registeredDate: "2024-04-25"
    },
    {
      productName: "Red Tape Leather Jacket",
      productCategory: "Fashion",
      productDetails: "Men's Leather Jacket, Size M, Brown",
      brand: "RedTape",
      price: 129.99,
      warrantyStatus: "1 year",
      payOnDelivery: false,
      registeredDate: "2024-05-30"
    },
    {
      productName: "To Kill a Mockingbird",
      productCategory: "Books",
      productDetails: "Paperback, 336 pages, publication year 1960",
      brand: "Harper Lee",
      price: 7.99,
      payOnDelivery: true,
      registeredDate: "2024-01-15"
    },
    {
      productName: "1984",
      productCategory: "Books",
      productDetails: "Hardcover, 328 pages, publication ear 1949",
      brand: "George Orwell",
      price: 12.49,
      payOnDelivery: true,
      registeredDate: "2024-02-20"
    },
    {
      productName: "Pride and Prejudice",
      productCategory: "Books",
      productDetails: "Paperback, 279 pages, publication year 1813",
      brand: "Jane Austen",
      price: 6.99,
      payOnDelivery: false,
      registeredDate: "2024-03-05"
    },
    {
      productName: "The Great Gatsby",
      productCategory: "Books",
      productDetails: "Hardcover, 180 pages, publication year 1925",
      brand: "F. Scott Fitzgerald",
      price: 10.99,
      payOnDelivery: true,
      registeredDate: "2024-04-10"
    },
    {
      productName: "The Catcher in the Rye",
      productCategory: "Books",
      productDetails: "Paperback, 214 pages, publication year 1951",
      brand: "J.D. Salinger",
      price: 8.49,
      payOnDelivery: false,
      registeredDate: "2024-01-25"
    },
    {
      productName: "Moby-Dick",
      productCategory: "Books",
      productDetails: "Hardcover, 635 pages, publication year 1851",
      brand: "Herman Melville",
      price: 15.99,
      payOnDelivery: true,
      registeredDate: "2024-02-15"
    },
    {
      productName: "The Hobbit",
      productCategory: "Books",
      productDetails: "Paperback, 310 pages, publication year 1937",
      brand: "J.R.R. Tolkien",
      price: 9.99,
      payOnDelivery: false,
      registeredDate: "2024-03-22"
    },
    {
      productName: "Brave New World",
      productCategory: "Books",
      productDetails: "Hardcover, 268 pages, publication year 1932",
      brand: "Aldous Huxley",
      price: 13.49,
      payOnDelivery: true,
      registeredDate: "2024-04-30"
    },
    {
      productName: "War and Peace",
      productCategory: "Books",
      productDetails: "Paperback, 1392 pages, publication year 1869",
      brand: "Leo Tolstoy",
      price: 18.99,
      payOnDelivery: false,
      registeredDate: "2024-05-10"
    },
    {
      productName: "Crime and Punishment",
      productCategory: "Books",
      productDetails: "Hardcover, 671 pages, publication year 1866",
      brand: "Fyodor Dostoevsky",
      price: 14.99,
      payOnDelivery: true,
      registeredDate: "2024-05-20"
    },
    {
      productName: "Cordless Vacuum Cleaner",
      productCategory: "Misc",
      productDetails: "120W suction power, 60-minute runtime, Lightweight",
      price: 199.99,
      warrantyStatus: "1 year",
      payOnDelivery: true,
      registeredDate: "2024-01-30"
    },
    {
      productName: "Ergonomic Office Chair",
      productCategory: "Misc",
      productDetails: "Adjustable height, Lumbar support, Breathable mesh",
      price: 149.99,
      warrantyStatus: "2 years",
      payOnDelivery: false,
      registeredDate: "2024-02-10"
    },
    {
      productName: "Portable Air Purifier",
      productCategory: "Misc",
      productDetails: "HEPA filter, 3 fan speeds, Covers up to 200 sq ft",
      price: 89.99,
      warrantyStatus: "1 year",
      payOnDelivery: true,
      registeredDate: "2024-03-05"
    },
    {
      productName: "Adjustable Dumbbells",
      productCategory: "Misc",
      productDetails: "Pair of 5-50 lbs, Easy weight adjustment",
      price: 299.99,
      warrantyStatus: "5 years",
      payOnDelivery: false,
      registeredDate: "2024-03-22"
    },
    {
      productName: "Instant Pot Pressure Cooker",
      productCategory: "Misc",
      productDetails: "6-quart, 7-in-1 functionality, Stainless steel",
      price: 99.99,
      warrantyStatus: "1 year",
      payOnDelivery: true,
      registeredDate: "2024-04-15"
    },
    {
      productName: "Electric Standing Desk",
      productCategory: "Misc",
      productDetails: "Height adjustable, Memory preset, 55-inch tabletop",
      price: 399.99,
      warrantyStatus: "3 years",
      payOnDelivery: false,
      registeredDate: "2024-04-30"
    },
    {
      productName: "Bluetooth LED Light Strip",
      productCategory: "Misc",
      productDetails: "16.4 ft, Color changing, App control",
      price: 29.99,
      warrantyStatus: "6 months",
      payOnDelivery: true,
      registeredDate: "2024-05-10"
    },
    {
      productName: "Smart Water Bottle",
      productCategory: "Misc",
      productDetails: "Keeps water cold for 24 hours, Tracks intake, Bluetooth connected",
      price: 49.99,
      warrantyStatus: "1 year",
      payOnDelivery: false,
      registeredDate: "2024-05-25"
    },
    {
      productName: "Portable Projector",
      productCategory: "Misc",
      productDetails: "1080p resolution, 200-inch display, Built-in speakers",
      price: 249.99,
      warrantyStatus: "2 years",
      payOnDelivery: true,
      registeredDate: "2024-06-10"
    },
    {
      productName: "Rechargeable Hand Warmer",
      productCategory: "Misc",
      productDetails: "5200mAh, Double-sided heating, 3 heat settings",
      price: 24.99,
      warrantyStatus: "1 year",
      payOnDelivery: false,
      registeredDate: "2024-06-20"
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
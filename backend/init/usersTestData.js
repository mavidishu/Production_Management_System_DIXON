const User = require("../models/User.js");

const testUsers = [
    {
        userName: 'JohnDoe',
        userEmail: 'john.doe@example.com',
        mobileNo: '1234567890',
        password: 'password123'
    },
    {
        userName: 'JaneDoe',
        userEmail: 'jane.doe@example.com',
        mobileNo: '0987654321',
        password: 'password456'
    },
    {
        userName: 'AliceSmith',
        userEmail: 'alice.smith@example.com',
        mobileNo: '1122334455',
        password: 'password789'
    },
    {
        userName: 'BobJohnson',
        userEmail: 'bob.johnson@example.com',
        mobileNo: '5566778899',
        password: 'password101'
    }
];

let filler = ()=>{
    User.deleteMany({});
    User.insertMany(testUsers).then(()=>{
        console.log("Test data inserted successfully.");
    }).catch((err)=>{
        console.log("Error Occurred.");
        console.log(err);
    })
}

module.exports = filler;
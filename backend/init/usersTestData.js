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
    },
    {
        userName: "Ivory.Schowalter",
        userEmail: "Ivory.Schowalter@example.com",
        mobileNo: "(687) 642-4851",
        password: "qW54p8vJ"
      },
      {
        userName: "Jevon42",
        userEmail: "Jevon42@example.com",
        mobileNo: "(852) 967-5402",
        password: "34TgK7jU"
      },
      {
        userName: "Rae_Ryan",
        userEmail: "Rae_Ryan@example.com",
        mobileNo: "1-340-432-3053",
        password: "a8F3y6sQ"
      },
      {
        userName: "Kameron93",
        userEmail: "Kameron93@example.com",
        mobileNo: "1-713-235-5426",
        password: "9Jd0H3fR"
      },
      {
        userName: "Raul.Reichert43",
        userEmail: "Raul.Reichert43@example.com",
        mobileNo: "621.845.5273",
        password: "7k5M4p6Y"
      },
      {
        userName: "Estell40",
        userEmail: "Estell40@example.com",
        mobileNo: "(293) 647-8123",
        password: "s9K5v3F1"
      },
      {
        userName: "Donato31",
        userEmail: "Donato31@example.com",
        mobileNo: "1-865-546-7109",
        password: "p6T3v5J8"
      },
      {
        userName: "Malinda66",
        userEmail: "Malinda66@example.com",
        mobileNo: "1-240-638-5873",
        password: "y8F7k6S3"
      },
      {
        userName: "Anabelle.Christiansen",
        userEmail: "Anabelle.Christiansen@example.com",
        mobileNo: "(248) 536-4170",
        password: "b4P9v5G2"
      },
      {
        userName: "Kellie97",
        userEmail: "Kellie97@example.com",
        mobileNo: "1-702-658-3504",
        password: "t3F8k7M1"
      },
      {
        userName: "Layla22",
        userEmail: "Layla22@example.com",
        mobileNo: "(484) 555-1234",
        password: "password123"
      },
      {
        userName: "Eloise_West",
        userEmail: "Eloise_West@example.com",
        mobileNo: "(206) 555-9876",
        password: "securePass1"
      },
      {
        userName: "Mose84",
        userEmail: "Mose84@example.com",
        mobileNo: "(512) 555-4321",
        password: "mySecretPwd2"
      },
      {
        userName: "Candido90",
        userEmail: "Candido90@example.com",
        mobileNo: "(919) 555-6789",
        password: "letMeIn99"
      },
      {
        userName: "Roselyn52",
        userEmail: "Roselyn52@example.com",
        mobileNo: "(303) 555-1234",
        password: "welcome12"
      },
      {
        userName: "Sage85",
        userEmail: "Sage85@example.com",
        mobileNo: "(718) 555-5678",
        password: "helloWorld7"
      },
      {
        userName: "Adelia66",
        userEmail: "Adelia66@example.com",
        mobileNo: "(505) 555-7890",
        password: "password098"
      },
      {
        userName: "Mylene98",
        userEmail: "Mylene98@example.com",
        mobileNo: "(813) 555-3456",
        password: "passw0rd"
      },
      {
        userName: "Orlando83",
        userEmail: "Orlando83@example.com",
        mobileNo: "(414) 555-1234",
        password: "securePwd3"
      },
      {
        userName: "Cassidy27",
        userEmail: "Cassidy27@example.com",
        mobileNo: "(619) 555-9876",
        password: "pass12345"
      },
      {
        userName: "Euna45",
        userEmail: "Euna45@example.com",
        mobileNo: "(805) 555-6789",
        password: "topSecret1"
      },
      {
        userName: "Xzavier77",
        userEmail: "Xzavier77@example.com",
        mobileNo: "(907) 555-4321",
        password: "qwerty123"
      },
      {
        userName: "Rowena29",
        userEmail: "Rowena29@example.com",
        mobileNo: "(302) 555-5678",
        password: "simplePwd"
      },
      {
        userName: "Sienna69",
        userEmail: "Sienna69@example.com",
        mobileNo: "(402) 555-7890",
        password: "passwd123"
      },
      {
        userName: "Alda88",
        userEmail: "Alda88@example.com",
        mobileNo: "(610) 555-3456",
        password: "adminPass"
      },
      {
        userName: "Cecil85",
        userEmail: "Cecil85@example.com",
        mobileNo: "(702) 555-1234",
        password: "guest1234"
      },
      {
        userName: "Reba56",
        userEmail: "Reba56@example.com",
        mobileNo: "(801) 555-9876",
        password: "userPass1"
      },
      {
        userName: "Afton37",
        userEmail: "Afton37@example.com",
        mobileNo: "(210) 555-6789",
        password: "letMeIn1"
      },
      {
        userName: "Chet57",
        userEmail: "Chet57@example.com",
        mobileNo: "(505) 555-4321",
        password: "securePwd2"
      },
      {
        userName: "Aletha60",
        userEmail: "Aletha60@example.com",
        mobileNo: "(608) 555-5678",
        password: "safePwd45"
      },
      {
        userName: "Jonas76",
        userEmail: "Jonas76@example.com",
        mobileNo: "(718) 555-7890",
        password: "strongPwd7"
      },
      {
        userName: "Lorenza33",
        userEmail: "Lorenza33@example.com",
        mobileNo: "(808) 555-3456",
        password: "mySecret1"
      },
      {
        userName: "Durward22",
        userEmail: "Durward22@example.com",
        mobileNo: "(818) 555-1234",
        password: "yourPwd8"
      },
      {
        userName: "Carmella42",
        userEmail: "Carmella42@example.com",
        mobileNo: "(909) 555-9876",
        password: "passw0rd!"
      },
      {
        userName: "Aracely40",
        userEmail: "Aracely40@example.com",
        mobileNo: "(402) 555-6789",
        password: "myPassword"
      },
      {
        userName: "Jamison84",
        userEmail: "Jamison84@example.com",
        mobileNo: "(502) 555-4321",
        password: "helloPwd2"
      },
      {
        userName: "Kathlyn38",
        userEmail: "Kathlyn38@example.com",
        mobileNo: "(606) 555-5678",
        password: "1234abcd"
      },
      {
        userName: "Isabel87",
        userEmail: "Isabel87@example.com",
        mobileNo: "(713) 555-7890",
        password: "superPwd1"
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
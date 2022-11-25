const express=require('express');
const mongoose = require('mongoose');
const app=express();
app.use(express.json());
const mclient=require("mongodb").MongoClient;

const cors = require("cors");
app.use(cors());
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

var nodemailer = require("nodemailer");

//DB connection url
const DBurl="mongodb+srv://onlineStoreDB:onlineStoreDB123@onlinestore.xgz61ga.mongodb.net/?retryWrites=true&w=majority"

//conncet with mongodb server
// mclient.connect(DBurl)
// .then((client)=>{

//     let dbObj=client.db("store");

//     //create collection objects
//     let customersCollectionObject=dbObj.collection("customers");
//     let myordersCollectionObject=dbObj.collection("myorders");

//     //sharing collection objects to api
//     app.set("customersCollectionObject",customersCollectionObject);
//     app.set("myordersCollectionObject",myordersCollectionObject);

//     console.log("DB connection success")
// })
// .catch(err=>console.log("error in DB connection",err))

// app.listen(5000, () => {
//       console.log(`Server Started at ${5000}`)
//   })

// //to import userApp and productApi
// const customerApp=require('./containers/customersApi');
// // const productApp=require('./APIS/productApi');

// //to execute specific middleware based on path

// app.use('/customers-api',customerApp);
// // app.use('/product-api',productApp);



// app.post('/homepage', (req, res) => {
//     const click = {clickTime: new Date()};
//     console.log(click);
//     console.log(db);
  
//     db.collection('clicks').save(click, (err, result) => {
//       if (err) {
//         return console.log(err);
//       }
//       console.log('click added to db');
//       res.sendStatus(201);
//     });
// });


mongoose
  .connect(DBurl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

require("./userDetails");

const User = mongoose.model("customers");

app.listen(5000, () => {
    console.log("Server Started");
  });

  app.post("/signup", async (req, res) => {
    const {Username, Email, Password, City, Contact } = req.body;
  
    const encryptedPassword = await bcrypt.hash(Password, 10);
    try {
      const oldUser = await User.findOne({ Email });
  
      if (oldUser) {
        return res.json({ error: "User Exists" });
      }
      await User.create({
        Username, 
        Email, 
        Password:encryptedPassword, 
        City, 
        Contact
      });
      res.send({ status: "ok" });
    } catch (error) {
      res.send({ status: "error" });
    }
  });
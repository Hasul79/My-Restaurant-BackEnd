require("dotenv").config();
const express = require("express");
const Pizza = require('./models/pizzaModel');
const cors = require('cors')
const router= require('./routes/nodMailerRouter')



const app = express();
const db = require('./db.js')
app.use(express.json());
app.use(cors());
app.use(router);



const pizzasRoute = require('./routes/pizzasRoute')
const userRoute = require('./routes/userRoute')
const ordersRoute = require('./routes/ordersRoute')



app.use('/api/pizzas/', pizzasRoute)
app.use('/api/users/', userRoute)
app.use('/api/orders/' , ordersRoute)
app.get("/", (req, res) => {
    res.send("Server working " + port);
});


// app.get("/getpizzas", (req, res) => {
//   Pizza.find({}, (err, docs)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         res.send(docs)
//     }
//   })
// });

// const { model } = require('mongoose');
 

// const nodemailer = require('nodemailer');


// function sendMail(){
// let mailTransporter = nodemailer.createTransport({
//     service:  "gmail",
//     auth:{
//         user:"hasmikminasyan.1979@gmail.com",
//         pass: "vnyfpgeuzstexyek"
//     }
// })
// let details = {
//     from :"hasmikminasyan.1979@gmail.com",
//     to: "hatuk2@mail.ru",
//    subject: "testing our nodemailer",
//     text: "Hello my dear"
// }

// mailTransporter.sendMail(details, (err)=>{
//     if(err){
//         console.log("it has en error", err )
//     }
//     else {
//         console.log("email has sent!")
//     }
//  })
// }

// app.post('/sendmail', (req, res)=>{
//     sendMail()
//     res.send("Բարի գալուստ My pizza")
// })

const port = process.env.PORT || 7000;

app.listen(port, () => 'Server running an port 🔥');


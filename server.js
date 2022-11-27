const express = require("express");
const Pizza = require('./models/pizzaModel');

const app = express();
const db = require('./db.js')
app.use(express.json());



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

const port = process.env.PORT || 7000;

app.listen(port, () => 'Server running an port 🔥');


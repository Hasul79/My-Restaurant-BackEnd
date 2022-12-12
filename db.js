const mongoose = require("mongoose");
const mongoURL = process.env.MONGO_URL



mongoose.connect(mongoURL, {useUnifiedTopology: true, useNewUrlParser: true})

let db = mongoose.connection
db.on('connected', ()=>{
    console.log('Mongo DB Connection Successfull');
})
db.on('error', ()=>{
    console.log('Mongo DB Connection failed');
})

module.exports = mongoose
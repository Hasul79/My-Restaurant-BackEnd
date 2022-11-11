const mongoose = require("mongoose");

let mongoURL = 'mongodb+srv://Hasmik:hasolino777@cluster0.runi8is.mongodb.net/my-pizza'

mongoose.connect(mongoURL, {useUnifiedTopology: true, useNewUrlParser: true})

let db = mongoose.connection

db.on('connected', ()=>{
    console.log('Mongo DB Connection Successfull');
})

db.on('error', ()=>{
    console.log('Mongo DB Connection failed');
})

module.exports = mongoose
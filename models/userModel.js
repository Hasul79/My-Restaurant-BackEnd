const mongoose = require("mongoose");

const userSchema = mongoose.Schema({

    name : {type: String,  required: true},
    email : {type: String,  required: true},
    password : {type: String, required: true},
    isAdmin : {type : Boolean , require , default: false},

} , {
    timestamps : true,
})

module.exports = mongoose.model('users', userSchema)
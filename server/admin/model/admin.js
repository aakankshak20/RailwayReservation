const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const admin= new Schema({
    fname:{
        type:String,
        required:[true,'Please Enter First name']
    },
    lname:{
        type:String,
        required:[true,'Please Enter Last name']
    },
    email:{
        type:String,
        required:[true,'Please enter email'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'Please Enter Password']
    }
});

const Admin = mongoose.model('Admin',admin)
module.exports = Admin
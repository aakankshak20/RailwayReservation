const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const admin= new Schema({
    fname:{
        type:String,
        
    },
    lname:{
        type:String,
        
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
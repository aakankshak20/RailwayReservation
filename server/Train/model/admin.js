const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//create passenger Schema and model
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

// const       name for collection  passing our schema
const Admin = mongoose.model('Admin',admin)
module.exports = Admin
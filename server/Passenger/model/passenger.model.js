const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create passenger Schema and model
const passengerSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please enter the  name']
    },
    email: {
        type: String,
        required: [true, 'Please enter email name']
    },
    password: {
        type: String,
        required: [true, 'Please enter your password']
    }
});

// const                    name for collection  passing our schema
const Passenger = mongoose.model('passenger', passengerSchema);
module.exports = Passenger;

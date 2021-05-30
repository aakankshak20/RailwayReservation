const mongoose=require('mongoose');
const Schema= mongoose.Schema;

const reservation = new Schema({
   Reservation_Date:{
        type:Date,
        required:[true,'Date is required']
    },
    Source:{
        type:String,
        required:[true,'Source is required']
    },
    Destination:{
        type:String,
        required:[true,'Destination required']
    },
    Train_Name:{
        type:String,
        required:[true,'Train name is required']
    },
    Fare:{
        type:Number,
        required:[false]
    },
    Book:{
        type:Boolean,

    },
    Class:{
        type:String,
        required:[true,'Please specify which class you wanted to book']
    },
    Passenger:{
        type:Number,
        required:[true,'Please specify no of passengers']
    },
    Train_Number:{
        type:Number,
        required:[false,'Please specify train number']
    }

});

const Reservation = mongoose.model('reservation',reservation);

module.exports = Reservation;
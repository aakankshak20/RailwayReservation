const mongoose=require('mongoose');
const Schema= mongoose.Schema;

const reservation = new Schema({
   Reservation_Date:{
        type:Date,
        required:[true,'Date is required']
    },
    Source:{
        type:String,
        
    },
    Destination:{
        type:String,
        
    },
    Train_Name:{
        type:String,
        
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
       
    }

});

const Reservation = mongoose.model('reservation',reservation);

module.exports = Reservation;
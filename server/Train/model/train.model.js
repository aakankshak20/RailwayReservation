const mongoose=require('mongoose');
const Schema= mongoose.Schema;

const train = new Schema({
    Train_Name:{
        type:String,
        required:[true,'Enter train name']
    },
    Train_Number:{
        type:Number,
        required:[true,'Train number required']
    },
    Source:{
        type:String,
        required:[true,'Enter source']
    },
    Destination:{
        type:String,
        required:[true,'Enter dest']
    },
    Fair:{
        type:String,
        required:[true,'Enter Fair']
    }
});

const Train= mongoose.model('train',train);

module.exports = Train;
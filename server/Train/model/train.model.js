const mongoose=require('mongoose');
const Schema= mongoose.Schema;

const train = new Schema({
    Train_Name:{
        type:String,
        required:[true,'Train Name is required']
    },
    Train_Number:{
        type:Number,
        required:[true,'Train Number is required']
    },
    Source:{
        type:String,
        required:[true,'Source is required']
    },
    Destination:{
        type:String,
        required:[true,'Destination is required']
    },
    Fair:{
        type:String,
        required:[true,'Fair is required']
    }
});

const Train= mongoose.model('train',train);

module.exports = Train;
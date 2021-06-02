const mongoose=require('mongoose');
const Schema= mongoose.Schema;

const train = new Schema({
    Train_Name:{
        type:String,
       
    },
    Train_Number:{
        type:Number,
        
    },
    Source:{
        type:String,
       
    },
    Destination:{
        type:String,
       
    },
    Fair:{
        type:String,
       
    }
});

const Train= mongoose.model('train',train);

module.exports = Train;
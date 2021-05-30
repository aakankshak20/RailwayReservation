const express= require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://aakanksha:aakanksha1@cluster0.80ol3.mongodb.net/Train',{useNewUrlParser:true ,
useUnifiedTopology: true,useFindAndModify: false  } );
mongoose.Promise = global.Promise;
 
 const train=require('./routes/train')
 const app=express();

 app.use(express.json());

 app.use(train);

 app.use(function(err,req,res,next){
        
        res.status(422).send({error:err.message});
    });

app.listen(process.env.port||2000,function(){
    console.log('Train service running');

});
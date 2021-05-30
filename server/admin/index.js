const express= require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://aakanksha:aakanksha1@cluster0.80ol3.mongodb.net/TrainAdmin',{useNewUrlParser:true}, { useUnifiedTopology: true } );
 mongoose.Promise = global.Promise;

 const admin=require('./routes/admin')
 const app=express();

 app.use(express.json());

 app.use(admin);

 app.use(function(err,req,res,next){
        // console.log(err);
        res.status(422).send({error:err.message});
    });

app.listen(process.env.port||5000,function(){
    console.log('Admin service running');

});
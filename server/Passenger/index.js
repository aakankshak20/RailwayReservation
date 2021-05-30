const express= require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://aakanksha:aakanksha1@cluster0.80ol3.mongodb.net/Passenger',{useNewUrlParser:true}, { useUnifiedTopology: true } );
mongoose.Promise = global.Promise;

const passenger=require('./routes/passenger')
// const register=require('./routes/registration')


const app=express();
app.use(express.json());

app.use(passenger);
// app.use(register);

app.use(function(err,req,res,next){
    // console.log(err);
    res.status(422).send({error:err.message});
});

app.listen(process.env.port||3000,function(){
    console.log('Passenger service running');

});
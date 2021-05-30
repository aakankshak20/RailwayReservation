// const express= require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://aakanksha:aakanksha1@cluster0.80ol3.mongodb.net/Passenger',{useNewUrlParser:true}, { useUnifiedTopology: true } );
// mongoose.Promise = global.Promise;

// const login = require('./server/routes/login')
// const register= require('./server/routes/registration')
// const reservation= require('./server/routes/reservation')
// const admin=require('./server/routes/admin')
// const viewTrain=require('./server/routes/viewTrain')
// const app=express();


// app.use(express.json());
// // app.use(login);
// // app.use(register);
// // app.use(reservation);
// // app.use(admin);
// // app.use(viewTrain);

// app.use(function(err,req,res,next){
//     // console.log(err);
//     res.status(422).send({error:err.message});
// });

// app.listen(process.env.port||4000,function(){
//     console.log('Application running');

// });
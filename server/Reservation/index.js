const express= require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');



mongoose.connect('mongodb+srv://aakanksha:aakanksha1@cluster0.80ol3.mongodb.net/Reservation',{useNewUrlParser:true ,useFindAndModify:true,useUnifiedTopology: true } );
//mongoose.Promise = global.Promise;

// mongoose.createConnection('mongodb+srv://aakanksha:aakanksha1@cluster0.80ol3.mongodb.net/Train',{useNewUrlParser:true})

const reservation= require('./routes/reservation')
const app=express();
const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Express API for RailwayReservation-Train',
    version: '1.0.0',
  },
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerUi = require('swagger-ui-express');

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.use(express.json());
app.use(reservation);

app.use(function(err,req,res,next){
        // console.log(err);
        res.status(422).send({error:err.message});
 });

 app.listen(process.env.port||4000,function(){
        console.log('Reservation service running');
    
 });
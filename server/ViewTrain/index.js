const express= require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://aakanksha:aakanksha1@cluster0.80ol3.mongodb.net/Train',{useNewUrlParser:true , useUnifiedTopology: true } );
 mongoose.Promise = global.Promise;

 const admin=require('./routes/viewTrain')
 const app=express();

 app.use(express.json());
 const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Express API for RailwayReservation-ViewTrain',
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


 app.use(admin);

 app.use(function(err,req,res,next){
        // console.log(err);
        res.status(422).send({error:err.message});
    });

app.listen(process.env.port||8000,function(){
    console.log('View Train service running');

});
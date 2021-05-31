const express= require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors=require('cors')

mongoose.connect('mongodb+srv://aakanksha:aakanksha1@cluster0.80ol3.mongodb.net/Train',{useNewUrlParser:true ,
useUnifiedTopology: true,useFindAndModify: false  } );
mongoose.Promise = global.Promise;
 
 const train=require('./routes/train')

 const app=express();
 app.use(cors());
 app.use(express.json());

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

 app.use(train);

 app.use(function(err,req,res,next){
        
        res.status(422).send({error:err.message});
    });

app.listen(process.env.port||2000,function(){
    console.log('Train service running');

});
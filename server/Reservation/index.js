const express= require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//allows us make request from one website to another website in browser(smae-origin-policy avoid)
const cors=require('cors');

//connection string
mongoose.connect('mongodb+srv://aakanksha:aakanksha1@cluster0.80ol3.mongodb.net/Reservation',{useNewUrlParser:true ,useFindAndModify:true,useUnifiedTopology: true } );
mongoose.Promise = global.Promise;

//importing our file
const reservation= require('./routes/reservation')
const app=express();


//swaagger for api documentation
//generates openapi definitions from jsdoc comments

const swaggerJSDoc = require('swagger-jsdoc');

//more info about api
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Express API for RailwayReservation-Reservation',
    version: '1.0.0',
  },
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./routes/*.js'],
};

//used by swagger-jsondoc to produce an openapi specification variable
const swaggerSpec = swaggerJSDoc(options);


//creates swagger ui page from definations
const swaggerUi = require('swagger-ui-express');


app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(reservation);

//for accessing our client side request
app.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});

app.use(function(err,req,res,next){
        // console.log(err);
        res.status(422).send({error:err.message});
 });


 app.listen(process.env.port||4000,function(){
        console.log('Reservation service running on 4000');
    
 });
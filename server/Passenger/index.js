const express= require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//allows us make request from one website to another website in browser(smae-origin-policy avoid)
const cors=require('cors');

//connection string
mongoose.connect('mongodb+srv://aakanksha:aakanksha1@cluster0.80ol3.mongodb.net/Passenger',{useNewUrlParser:true, useUnifiedTopology: true} );
mongoose.Promise = global.Promise;

//importing our file
const passenger=require('./routes/passenger')



const app=express();
app.use(express.json());
app.use(cors());

//swaagger for api documentation
//creates swagger ui page from definations
const swaggerUi=require('swagger-ui-express');

//generates openapi definitions from jsdoc comments
const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition={
    openapi:'3.0.0',
    info:{
        title:'Express API for Passenger',
        version:'1.0.0',
    },
};

const options={
    swaggerDefinition,
    apis:['./routes/*.js'],
};

//used by swagger-jsondoc to produce an openapi specification variable
const swaggerSpec = swaggerJSDoc(options);
app.use('/docs',swaggerUi.serve,swaggerUi.setup(swaggerSpec));

app.use(passenger);

//for accessing our client side request 
app.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
  });


  app.use(function(err, req, res, next){
    //console.log(err);
    res.status(422).send({error: err.message});
})

//listen for requests
app.listen(process.env.port || 3000, function(){
    console.log('listening to port 3000');
    console.log('Passenger service running');
});
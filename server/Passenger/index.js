const express= require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://aakanksha:aakanksha1@cluster0.80ol3.mongodb.net/Passenger',{useNewUrlParser:true}, { useUnifiedTopology: true } );
mongoose.Promise = global.Promise;

const passenger=require('./routes/passenger')
// const register=require('./routes/registration')


const app=express();
app.use(express.json());
const swaggerUi=require('swagger-ui-express');
// const swaggerDocument=require('./swagger.json');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerDefinition={
    openapi:'3.0.0',
    info:{
        title:'Express API ',
        version:'1.0.0',
    },
};

const options={
    swaggerDefinition,
    apis:['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);
app.use('/docs',swaggerUi.serve,swaggerUi.setup(swaggerSpec));

app.use(passenger);
// app.use(register);

app.use(function(err,req,res,next){
    // console.log(err);
    res.status(422).send({error:err.message});
});

app.listen(process.env.port||3000,function(){
    console.log('Passenger service running');

});
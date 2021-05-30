const express = require('express');
const Passenger = require('../model/passenger.model');
const router = express.Router();

router.post('/register',function(req,res,next){
   
    const newPassenger = new Passenger({
        email:req.body.email,
        name:req.body.name,
        password:req.body.password,
        age:req.body.age,
        address:req.body.address,
        gender:req.body.gender,

    });

    newPassenger.save(function(err){
        if(err){
            res.send(err.message);
        }else{
            res.send(newPassenger);
        }
    });
    
});


module.exports= router;
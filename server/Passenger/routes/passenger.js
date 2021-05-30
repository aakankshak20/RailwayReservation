const express = require('express');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Passenger = require('../model/passenger.model')
const router = express.Router();



router.post("/login" , (req, res ,  next)=>{
    let fetchedpsg;
    Passenger.findOne({email: req.body.email}).then(psg=>{
      if(!psg){
        return res.status(401).json({
          token: "error",
          expiresIn: "error",
          message: "Invalid Email (user email not registered)"
        });
      }
      fetchedpsg=psg;
      return bcrypt.compare(req.body.password, psg.password);
    })
    .then(result =>{
      if(!result){
        return res.status(401).json({
          token: "error",
          expiresIn: "error",
          message: "Invalid password please try again"
        });
      }
      const token = jwt.sign(
        {email: fetchedpsg.email , userId : fetchedpsg ._id } ,
        'this_is_the_webToken_secret_key' ,
        { expiresIn : "1h"}
        );
        res.status(200).json({
          token: token,
          expiresIn: 3600,
          message: "Logged in Successfully"
        });
    })
    .catch(err =>{
      return res.status(401).json({
        message: "Auth failed"
      });
    });
  })

router.post('/register',function(req,res,next){
    bcrypt.hash(req.body.password,10)
    .then(hash => {
        const newPassenger = new Passenger({
            email:req.body.email,
            name:req.body.name,
            password:hash,
            age:req.body.age,
            address:req.body.address,
            gender:req.body.gender,
    
        });
    

    newPassenger.save().then(result =>{
        res.status(201).json({
            message:'Passenger Registerd',
            result:result
        });
    })
    .catch(err =>{
        res.status(500).json({
            error:err
        });
    });
    })
});


module.exports= router;
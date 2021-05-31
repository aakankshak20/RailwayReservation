const express = require('express');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Passenger = require('../model/passenger.model')
const router = express.Router();


//login for passenger
/**
 * @swagger
 * /login:
 *   post:
 *     summary: login passenger in reservation system
 *     description: login passenger in reservation system. so that they can cancel or make reservation
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: email of passenger.
 *                 example: xyz@gmail.com
 *               password: 
 *                 type: string
 *                 description: password for email for login purpose.
 *                 example: abcd123
 *              
 *     responses:
 *       201:
 *         description: It will log in passenger along with required paramaters.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                         message:
 *                          type: strig
 *                          description: message for successful registration otherwise error message
 *                          example: Logged in Successfully
 */

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

  /**
 * @swagger
 * /register:
 *   post:
 *     summary: Add passenger in our passenger database
 *     description: Add passenge in our passenger database. so that is can make or cancel reservation
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: email of admin.
 *                 example: xyz@gmail.com
 *               fname:
 *                 type: string
 *                 description: admin name.
 *                 example: John
 *               lname:
 *                 type: string
 *                 description: admin last name.
 *                 example: thomson
 *               password: 
 *                 type: string
 *                 description: password for email for login purpose.
 *                 example: abcd123
 *              
 *     responses:
 *       201:
 *         description: It will add new passenger along with required paramaters.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                      message:
 *                          type: strig
 *                          description: message for successful registration otherwise error message
 *                          example: Passenger Registerd
 *                      result:
 *                          type: object
 *                          description: passenger deatils
 *                          example: all details
 */


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
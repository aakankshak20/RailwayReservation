
const express = require('express');
const Passenger = require('../model/passenger.model');
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
 *                          example: Success
 */

 router.post('/login',function(req,res){

    //assignment of request body into const
  const body= req.body
  const email=body.email
  const password=body.password
  
  try{
      //finding given email and password in our database with error first function
      Passenger.findOne({email:email,password:password},(err,val)=>{
          if(err){
              console.log(err);
          }else{
              if(val){
                  res.status(201).json('Success');
              }else{
                  res.status(401).json('Unautherized');
              }
          }
        });
      }catch(err){
          res.status(500).json(err)
      }
      
  
 
});
    
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
*               name:
*                 type: string
*                 description: admin name.
*                 example: John
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
*                      user:
*                          type: object
*                          description: passenger deatils
*                          example: all details of users
*/



//add a new passenger in the database
router.post('/register', function(req, res, next){
    //creating new passenger/user with given requested body 
    Passenger.create(req.body).then(function(user){
        res.status(201).send(user);
    }).catch(next);
});


module.exports = router;//so that we can access this in other files/modules
const express= require('express');
const Reservation = require('../model/reservation.model');
// const Train=require('../../Train/model/train.model')
const axios = require('axios');

const router = express.Router();

//for making reservation

/**
 * @swagger
 * /reservation:
 *   post:
 *     summary: For making new reservation
 *     description: For making new reservation so that they can travel and cancel if required
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Source:
 *                 type: string
 *                 description: train source.
 *                 example: Pune
 *               Destination:
 *                 type: string
 *                 description: train destination.
 *                 example: Mumbai
 *               Reservation Date:
 *                 type: date
 *                 description: for making reservation.
 *                 example: 2021-04-07
 *               Train name:
 *                 type: string
 *                 description: train name.
 *                 example: rajdhani
 *               Class:
 *                 type: string
 *                 description: class of train
 *                 example: second
 *               Passenger :
 *                 type: number
 *                 description: number of passenger travelling
 *                 example: 2
 *     responses:
 *       201:
 *         description: It will make new reservation along with required paramaters.
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
 *                       message:
 *                         type: string
 *                         description: information about updation
 *                         example: Your Reservation Details are below Please keep a note of _id in oreder to get reservation details
 *                       Train_Number:
 *                         type: integer
 *                         description: The Train number.
 *                         example: 121
 *                       Train_Name:
 *                         type: string
 *                         description: The trains's name.
 *                         example: rajdhani
 *                       id:
 *                         type: alphanumeric
 *                         description: unique id for reservation
 *                         example: 67241325svb
 *                       Source:
 *                         type: string
 *                         description: Source name.
 *                         example: Mumbai
 *                       Destination:
 *                         type: string
 *                         description: Destination name.
 *                         example: pune
 *                       Fare:
 *                         type: number
 *                         description: Fare from source t destination.
 *                         example: 200
 */

router.post('/reservation',async function(req,res){
    
       const reservation = new Reservation({
        Reservation_Date:req.body.Reservation_Date,
        Source:req.body.Source,
        Destination:req.body.Destination,
        Train_Name:req.body.Train_Name,
        Fare:500,
        Book:true,
        Train_Number:req.body.Train_Number,
        Passenger:req.body.Passenger,
        Class:req.body.Class
       });



// Train.findOne({Source:reservation.Source,Destination:reservation.Destination},(err,val)=>{
//     if(err){
//         console.log(err);
//     }else{
//         if(val){
//            reservation.Fare=val.Fair*reservation.Passenger 
//         }else{
//            console.log("Error")
//         }
//     }
//   });


const src=reservation.Source;
const dst=reservation.Destination;
const val=9;

//  axios.get("http://localhost:2000/trains/",{
//     params:{
//         Source:src,
//         Destination:dst
//     },
//         responseType:'json',
    
// }).then((response)=>{
//     console.log( response.data);
//     console.log( response.data.Fair);
// })

// await axios.get("http://localhost:2000/trains/")
    
//     .then((response)=>{
//     let trains=[];
//     response.data.map((train)=>{
//         trains.push(train);
//         for(let i in trains){
//             if(src==trains[i]){
//                 console.log(trains[i])
//                  reservation.Fare=trains.Fair;
//              }
           
//         }
//     });
//     console.log(trains)
//     // res.send(trains);
   

// })
// .catch((err)=>{
//     console.log(err)
// });



    // reservation.save(function(err){
    //     console.log(reservation.Fare)  
    //     if(err){
           
    //         res.send(err.message);
    //     }else{

    //         if(reservation.Fare === 0){
    //             res.send(`Sorry we don't have trains for given Source-Destination` );
    //         }else{
    //             res.status(201).send({
    //                 message:"Your Reservation Details are below Please keep a note of _id in oreder to get reservation details",
    //                 reservation
    //             });
    //         }
            
    //     }
    // });
   var reserfinal; 

   await reservation.save();
   await Reservation.findById({_id:reservation._id}).then((reser)=>{
    //console.log(reser)
        if(reser){
            // console.log(reser)
        axios.get("http://localhost:2000/trainname/"+ reser.Train_Name)
            .then((response)=>{
                // console.log(response.data)
                 reserfinal={
                    id: reser._id,
                    Fare: response.data[0].Fair*reservation.Passenger,
                    Source: response.data[0].Source,
                    Destination: response.data[0].Destination,

                };
                // console.log(reserfinal);
                // reser.Fare=reserfinal.Fair;
                
                Reservation.findOneAndUpdate({_id:reser._id},reserfinal).then(function(){
                    Reservation.findOne({_id:reser._id}).then(function(reservation){
                        res.status(201).send(
                            reservation
                            
                        );
                    });
                })
                //res.send({reserfinal,reservation});
                // console.log(reser._id)
            });
        }else{
            res.send("check train schedule");
        }
    })
});

//for by source-destination reservation
router.post('/reservationsd', async function(req,res){

    const reservation = new Reservation({
        Reservation_Date:req.body.Reservation_Date,
        Source:req.body.Source,
        Destination:req.body.Destination,
        Fare:500,
        Book:true,
        Passenger:req.body.Passenger,
        Class:req.body.Class
       });


       var reserfinal; 

   await reservation.save();
   await Reservation.findById({_id:reservation._id}).then((reser)=>{
    //console.log(reser)
        if(reser){
            // console.log(reser)
        axios.get("http://localhost:2000/trainsd/"+ reser.Source+"/"+reser.Destination)
            .then((response)=>{
                // console.log(response.data)
                 reserfinal={
                    id: reser._id,
                    Fare: response.data[0].Fair*reservation.Passenger,
                    Passenger: response.data[0].Passenger,
                    Source: response.data[0].Source,
                    Destination: response.data[0].Destination,

                };
                // console.log(reserfinal);
                // reser.Fare=reserfinal.Fair;
                
                Reservation.findOneAndUpdate({_id:reser._id},reserfinal).then(function(){
                    Reservation.findOne({_id:reser._id}).then(function(reservation){
                        res.status(201).json(
                           
                            reservation,
                            reserfinal
                            
                        );
                    });
                })
                //res.send({reserfinal,reservation});
                // console.log(reser._id)
            });
        }else{
            res.send("check train schedule");
        }
    })
});

// })



//for getting all reservations

/**
 * @swagger
 * /reservations:
 *   get:
 *     summary: Retrieve a list of reservations made
 *     description: Retrieve a list of reservations made from reservation databse. Can be used for cancel reservations.
 *     responses:
 *       200:
 *         description: A list of reservations.
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
 *                       id:
 *                         type: alphanumeric
 *                         description: reservation id .
 *                         example: 12123198udi
 *                       Train_Number:
 *                         type: integer
 *                         description: The Train number.
 *                         example: 121
 *                       Train_Name:
 *                         type: string
 *                         description: The trains's name.
 *                         example: rajdhani
 *                       Source:
 *                         type: string
 *                         description: Source name.
 *                         example: Mumbai
 *                       Destination:
 *                         type: string
 *                         description: Destination name.
 *                         example: pune
 *                       Fare:
 *                         type: number
 *                         description: Fare from source t destination.
 *                         example: 200
 *                       Book:
 *                         type: boolean
 *                         description: Booking status
 *                         example: true
 */



router.get('/reservations',  async function (req, res) {
    try {
        
        const result = await Reservation.find()
        res.status(200).json(result)
       
    } catch (err) {
        res.status(500).json(err)
    }
});


//for getting specific id
/**
 * @swagger
 * /reservations/{id}:
 *   get:
 *     summary: Retrieve a single reservation with the help of reservation id.
 *     description: Retrieve a single reservation with the help of reservation id.Can be used for cancel reservations.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric  and unique ID of the reservation to retrieve a reservation.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single reservation.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                    id:
 *                         type: alphanumeric
 *                         description: reservation id.
 *                         example: 674232eab
 *                    Train_Number:
 *                         type: integer
 *                         description: The Train number.
 *                         example: 121
 *                    Train_Name:
 *                         type: string
 *                         description: The trains's name.
 *                         example: rajdhani
 *                    Source:
 *                         type: string
 *                         description: Source name.
 *                         example: Mumbai
 *                    Destination:
 *                         type: string
 *                         description: Destination name.
 *                         example: pune
 *                    Fare:
 *                         type: number
 *                         description: Fare from source t destination.
 *                         example: 200
 *                    Book:                      
 *                         type: boolean
 *                         description: status of reservation.
 *                         example: true
*/

router.get('/reservations/:id',function(req,res){
    const id= req.params.id;
    try{
        Reservation.findById({_id:id},(err,val)=>{
            if(err){
                console.log(err)
            }else{
                if(val){
                    res.status(200).json(val)
                }else{
                    res.status(400).json(err)
                }
            }
        });
    }catch(err){
        res.status(500).json(err)
    }
});


//for delete reservation

/**
 * @swagger
 * /reservations{id}:
 *   delete:
 *     summary: delete  reservation from our reservation database
 *     description: delete  reservation from our reservation database. 
 *     requestBody:
 *       required: false       
 *     responses:
 *       200:
 *         description: It will delete reservation along with required paramaters.
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
 *                       message:
 *                         type: string
 *                         description: information about updation
 *                         example: You have deleted this reservation 

 *                       Train_Number:
 *                         type: integer
 *                         description: The Train number.
 *                         example: 121
 *                       Train_Name:
 *                         type: string
 *                         description: The trains's name.
 *                         example: rajdhani
 *                       Source:
 *                         type: string
 *                         description: Source name.
 *                         example: Mumbai
 *                       Destination:
 *                         type: string
 *                         description: Destination name.
 *                         example: pune
 *                       Fare:
 *                         type: number
 *                         description: Fare from source t destination.
 *                         example: 200
 *                       Book:
 *                         type: boolean
 *                         description: previous booking status
 *                         example: false
 */



router.delete('/reservations/:id',function(req,res){
 const id=req.params.id
 try{
     
     Reservation.findOneAndDelete(id,(err,val)=>{
         if(err){
             console.log(err)
             res.status(400).send('Unable to proceed please check Reservation id')
         }else{
             if(val){
                 res.status(200).json({
                    message:'You have deleted this reservation', 
                    val})
             }else{
                 res.status(400).send('Unable to proceed please check Reservation id')
             }
         }
     });
 }catch(err){
     res.status(500).json(err)
 }
   
});

//for updating reservation

/**
 * @swagger
 * /reservation{id}:
 *   put:
 *     summary: update reservation in our reservation database
 *     description: update reservation in our reservation database. Can be used for making/cancel reservations.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Source:
 *                 type: string
 *                 description: train source.
 *                 example: Pune
 *               Destination:
 *                 type: string
 *                 description: train destination.
 *                 example: Mumbai
 *               Train number:
 *                 type: number
 *                 description: train number.
 *                 example: 223
 *               Train name:
 *                 type: string
 *                 description: train name.
 *                 example: rajdhani
 *               Fare:
 *                 type: number
 *                 description: train fare.
 *                 example: 200
 *               Book:
 *                 type: boolean
 *                 description: bbokun status.
 *                 example: true
 *              
 *     responses:
 *       201:
 *         description: It will update train along with required paramaters.
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
 *                       message:
 *                         type: string
 *                         description: information about updation
 *                         example: Train details has been updated please check details
 *                       Train_Number:
 *                         type: integer
 *                         description: The Train number.
 *                         example: 121
 *                       Train_Name:
 *                         type: string
 *                         description: The trains's name.
 *                         example: rajdhani
 *                       Source:
 *                         type: string
 *                         description: Source name.
 *                         example: Mumbai
 *                       Destination:
 *                         type: string
 *                         description: Destination name.
 *                         example: pune
 *                       Fare:
 *                         type: number
 *                         description: Fare from source t destination.
 *                         example: 200
 */


router.put('/reservation/:id',function(req,res,next){
    Reservation.findOneAndUpdate({_id:req.params.id},req.body).then(function(){
        Reservation.findOne({_id:req.params.id}).then(function(reserved){
            res.status(201).send({
                message:"Your Updated reservation details,Please find below details ",
                reserved});
        });
    });
});


// router.get("/test",(req,res,next)=>{
//     axios.get("http://localhost:2000/trains/")
    
//     .then((response)=>{
//     let trains=[];
//     response.data.map((train)=>{
//         trains.push(train);
//     });
//     console.log(trains)
//     res.send(trains);

// })
// .catch((err)=>{
//     console.log(err)
// });
// })




module.exports = router;
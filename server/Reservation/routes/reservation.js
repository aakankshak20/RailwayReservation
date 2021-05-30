const express= require('express');
const Reservation = require('../model/reservation.model');
// const Train=require('../../Train/model/train.model')
const axios = require('axios');

const router = express.Router();

//for making reservation
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
                        res.status(201).send({
                            message:"Please keep a note of reservation id in order to have future operations",
                            
                            reserfinal,
                            reservation
                            
                        });
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

//for getting all reservations
router.get('/reservations',  async function (req, res) {
    try {
        
        const result = await Reservation.find()
        res.status(200).json(result)
       
    } catch (err) {
        res.status(500).json(err)
    }
});


//for getting specific id
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
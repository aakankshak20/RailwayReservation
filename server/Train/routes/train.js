const express=require('express')
const Train=require('../model/train.model')
const Admin=require('../model/admin')

const router = express.Router();

//login admin
/**
 * @swagger
 * /login:
 *   post:
 *     summary: login admin in our system
 *     description: login admin in our system. so that is can access train CRUD operations
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
 *               password: 
 *                 type: string
 *                 description: password for email for login purpose.
 *                 example: abcd123
 *              
 *     responses:
 *       201:
 *         description: It will log in admin along with required paramaters.
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
 *                          example: Sucess
 */

router.post('/login',function(req,res){
    const body= req.body
    const email=body.email
    const password=body.password
    

    try{
        Admin.findOne({email:email,password:password},(err,val)=>{
        if(err){
            console.log(err);
        }else{
            if(val){
                res.status(200).json('Sucess');
            }else{
                res.status(401).json('Unautherized');
            }
        }
    });
    }catch(err){
    res.status(500).json(err)
    }
    

});

//register admin
/**
 * @swagger
 * /register:
 *   post:
 *     summary: Add admin in our admin database
 *     description: Add admin in our admin database. so that is can access train CRUD operations
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
 *         description: It will add new admin along with required paramaters.
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
 *                          example: Admin Registerd
 *                      result:
 *                          type: object
 *                          description: admin deatils
 *                          example: all details
 */


router.post('/register',function(req,res,next){
   
    const newTrainAdmin = new Admin({
        email:req.body.email,
        fname:req.body.fname,
        lname:req.body.lname,
        password:req.body.password
       
    });

    newTrainAdmin.save(function(err){
        if(err){
            res.send(err.message);
        }else{
            res.send(newTrainAdmin);
        }
    });
    
});



//new train 


/**
 * @swagger
 * /trainadd:
 *   post:
 *     summary: Add new train in our train database
 *     description: Add new train in our train database. Can be used for making reservations.
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
 *               Train_Number:
 *                 type: number
 *                 description: train number.
 *                 example: 223
 *               Train_Name:
 *                 type: string
 *                 description: train name.
 *                 example: rajdhani
 *               Fair:
 *                 type: number
 *                 description: train fare.
 *                 example: 200
 *              
 *     responses:
 *       201:
 *         description: It will add new train along with required paramaters.
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
 *                       Fair:
 *                         type: number
 *                         description: Fare from source t destination.
 *                         example: 200
 */

router.post('/trainadd',function(req,res){
  
    const train = new Train({
        Train_Name:req.body.Train_Name,
        Train_Number:req.body.Train_Number,
        Source:req.body.Source,
        Destination:req.body.Destination,
        Fair:req.body.Fair
    });


//saving train in database
   train.save(function(err){
       if(err){
           res.send(err.message);
       }else{
           res.status(201).send({
               message:"New Train Details successfully entered in DataBase",
               train
           });
       }
   });
});

//update Train

/**
 * @swagger
 * /trainupdate/{id}:
 *   put:
 *     summary: update train in our train database
 *     description: update train in our train database. Can be used for making reservations.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric and unique ID of the train .
 *         schema:
 *           type: number
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
 *               Train_Number:
 *                 type: number
 *                 description: train number.
 *                 example: 223
 *               Train_Name:
 *                 type: string
 *                 description: train name.
 *                 example: rajdhani
 *               Fair:
 *                 type: number
 *                 description: train fare.
 *                 example: 200
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
 *                       Fair:
 *                         type: number
 *                         description: Fare from source to destination.
 *                         example: 200
 */

router.put('/trainupdate/:id',function(req,res){
    //get train no and find that into train db in order to update
   Train.findOneAndUpdate({Train_Number:req.params.id},req.body).then(function(){
       //for display user what trains details are updated along with updated values
        Train.findOne({Train_Number:req.params.id}).then(function(train){
           res.status(201).send({
               message:'Train details has been updated please check details',
               train
           });
       });
   });
});

// for delete train details

/**
 * @swagger
 * /traindelete/{name}:
 *   delete:
 *     summary: delete  train from our train database
 *     description: delete  train from our train database. 
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         description: name of the train .
 *         schema:
 *           type: string
 *     requestBody:
 *       required: false       
 *     responses:
 *       200:
 *         description: It will delete train along with required paramaters.
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
 *                         description: information about deletion
 *                         example: You have deleted this train from database
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
 *                       Fair:
 *                         type: number
 *                         description: Fare from source t destination.
 *                         example: 200
 */

router.delete('/traindelete/:name',function(req,res){
    const name=req.params.name;
    try{
        //find train with the help of  and remove from database
        Train.findOneAndDelete({Train_Name:name},(err,val)=>{
            if(err){
                console.log(err)
            }else{
                if(val){
                    res.status(200).json({
                        message:'You have deleted this train from database',
                        val
                    })
                }else{
                    res.status(400).send('Unable to proceed please check train no')
                }
            }
        });
    }catch(err){
        res.status(500).json(err)
    }
});

//to get all trains

/**
 * @swagger
 * /trains:
 *   get:
 *     summary: Retrieve a list of available trains
 *     description: Retrieve a list of trains from Train databse. Can be used for making reservations.
 *     responses:
 *       200:
 *         description: A list of trains.
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
 *                       Fair:
 *                         type: number
 *                         description: Fare from source t destination.
 *                         example: 200
 */

router.get('/trains', async function(req,res){

    try{
        const trains= await Train.find();
        res.status(200).json(trains)
    } catch(err){
        res.status(500).json(err)
    }
    
});

//to get particular train details


/**
 * @swagger
 * /train/{id}:
 *   get:
 *     summary: Retrieve a single available train with the help of train number.
 *     description: Retrieve a single available train.Can be used for making reservations.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the train number to retrieve a train.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single train.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
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
 *                    Fair:
 *                         type: number
 *                         description: Fare from source to destination.
 *                         example: 200
*/

router.get('/train/:id',async function(req,res){
    const id=req.params.id;
    try{
        await Train.find({Train_Number:req.params.id},(err,val)=>{
            if(err){
                console.log(err)
            }else{
                if(val){
                    res.status(200).json(val)
                }else{
                    res.status(401).json(err)
                }
            }
        });
    }catch(err){
        res.status(500).json(err)
    }
});

/**
 * @swagger
 * /trainname/{name}:
 *   get:
 *     summary: Retrieve a single available train with the help of train name.
 *     description: Retrieve a single available train.Can be used for making reservations.
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         description: name of the train  to retrieve a train.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single train.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
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
 *                    Fair:
 *                         type: number
 *                         description: Fare from source t destination.
 *                         example: 200
*/


router.get('/trainname/:name', async function(req,res){
    const name=req.params.name;
    try{
      await Train.find({Train_Name:name},(err,val)=>{
            if(err){
                res.status(400).json(err)
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

/**
 * @swagger
 * /trainsource/{source}:
 *   get:
 *     summary: Retrieve a single available train with the help of source.
 *     description: Retrieve a single available train.Can be used for making reservations.
 *     parameters:
 *       - in: path
 *         name: source
 *         required: true
 *         description: source of the train  to retrieve a train.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single train.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
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
 *                    Fair:
 *                         type: number
 *                         description: Fare from source t destination.
 *                         example: 200
*/

router.get('/trainsource/:source',async function(req,res){
    const source=req.params.source;
    try{
       await Train.find({Source:source},(err,val)=>{
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

/**
 * @swagger
 * /traindest/{dest}:
 *   get:
 *     summary: Retrieve a single available train with the help of destination.
 *     description: Retrieve a single available train.Can be used for making reservations.
 *     parameters:
 *       - in: path
 *         name: dest
 *         required: true
 *         description: destination of the train  to retrieve a train.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single train.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
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
 *                    Fair:
 *                         type: number
 *                         description: Fare from source t destination.
 *                         example: 200
*/


router.get('/traindest/:dest',async function(req,res){
    const destination=req.params.dest;
    try{
       await Train.find({Destination:destination},(err,val)=>{
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


router.get('/trainsd/:src/:dest',async function(req,res){
   
   
    // res.send(data);
    try{
       await Train.find({Source:req.params.src,Destination:req.params.dest},(err,val)=>{
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


module.exports=router;
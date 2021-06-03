const express= require('express')
const Train= require('../../Train/model/train.model')
const axios= require('axios')
const router=express.Router()


//All train informations
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
 *                       Fare:
 *                         type: number
 *                         description: Fare from source t destination.
 *                         example: 200
 */

router.get('/trains', async function(req,res){
    try{
         await axios.get("http://localhost:2000/trains/").then((response)=>{
                    let trains=[];
                    response.data.map((train)=>{
                    trains.push(train);

                });
                console.log(trains);
                res.status(200).send(trains)
            })
        // const result = await Train.find()
        // res.status(200).json(result)
    } catch(err){
        res.status(500).json(err)
    }
});

//view train by name

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
 *                    Fare:
 *                         type: number
 *                         description: Fare from source t destination.
 *                         example: 200
*/

router.get('/trainname/:name', async function(req,res){
    const name=req.params.name;
    try{
        await axios.get("http://localhost:2000/trainname/"+name).then((response)=>{
            let trains=[];
            response.data.map((train)=>{
            trains.push(train);

        });
        //console.log(trains);
        res.status(200).send(trains)
        })
    //   await Train.find({Train_Name:name},(err,val)=>{
    //         if(err){
    //             console.log(err)
    //         }else{
    //             if(val){
    //                 res.status(200).json(val)
    //             }else{
    //                 res.status(400).json(err)
    //             }
    //         }
    //     });
    }catch(err){
        res.status(500).json(err)
    }
});


//view train by train number

/**
 * @swagger
 * /trains/{id}:
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
 *                         description: Fare from source t destination.
 *                         example: 200
*/
router.get('/trains/:id', async function(req,res){
    const id=req.params.id;
    try{

  await axios.get("http://localhost:2000/train/" +id).then((response)=>{
    //console.log(response.data[0]);
      res.status(200).json(response.data[0]);
  })


    //    await Train.find({Train_Number:id},(err,val)=>{
    //         if(err){
    //             console.log(err)
    //         }else{
    //             if(val){
    //                 res.status(200).json(val)
    //             }else{
    //                 res.status(400).json(err)
    //             }
    //         }
    //     });
    }catch(err){
        res.status(500).json(err)
    }
});

//view train by source

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
 *                    Fare:
 *                         type: number
 *                         description: Fare from source t destination.
 *                         example: 200
*/

router.get('/trainsource/:source',async function(req,res){
    const source=req.params.source;
    try{

        await axios.get("http://localhost:2000/trainsource/"+source).then((response)=>{
            let trains=[];
            response.data.map((train)=>{
            trains.push(train);

        });
        // console.log(trains);
        res.status(200).send(trains)
        })
    //    await Train.find({Source:source},(err,val)=>{
    //         if(err){
    //             console.log(err)
    //         }else{
    //             if(val){
    //                 res.status(200).json(val)
    //             }else{
    //                 res.status(400).json(err)
    //             }
    //         }
    //     });
    }catch(err){
        res.status(500).json(err)
    }
});

//view train by destination
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
 *                    Fare:
 *                         type: number
 *                         description: Fare from source t destination.
 *                         example: 200
*/

router.get('/traindest/:destination',async function(req,res){
    const dest=req.params.destination;
    try{

        await axios.get("http://localhost:2000/traindest/"+dest).then((response)=>{
            let trains=[];
            response.data.map((train)=>{
            trains.push(train);

        });
        // console.log(trains);
        res.status(200).send(trains)
        })
    //    await Train.find({Destination:dest},(err,val)=>{
    //         if(err){
    //             console.log(err)
    //         }else{
    //             if(val){
    //                 res.status(200).json(val)
    //             }else{
    //                 res.status(400).json(err)
    //             }
    //         }
    //     });
    }catch(err){
        res.status(500).json(err)
    }
});

module.exports= router;



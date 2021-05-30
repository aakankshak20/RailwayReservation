const express= require('express')
const Train= require('../../Train/model/train.model')
const axios= require('axios')
const router=express.Router()


//All train informations
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



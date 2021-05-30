const express=require('express')
const Train=require('../model/train.model')


const router = express.Router();

//login admin
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

router.put('/trainupdate/:id',function(req,res){
    //get train no and find that into train db in order to update
   Train.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
       //for display user what trains details are updated along with updated values
        Train.findOne({_id:req.params.id}).then(function(train){
           res.status(201).send({
               message:'Train details has been updated please check details',
               train
           });
       });
   });
});

// for delete train details

router.delete('/traindelete/:id',function(req,res){
    const no=req.params.id
    try{
        //find train with the help of ID and remove from database
        Train.findByIdAndRemove(no,(err,val)=>{
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

router.get('/trains', async function(req,res){

    try{
        const trains= await Train.find();
        res.status(200).json(trains)
    } catch(err){
        res.status(500).json(err)
    }
    
});

//to get particular train details

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



router.get('/trainname/:name', async function(req,res){
    const name=req.params.name;
    try{
      await Train.find({Train_Name:name},(err,val)=>{
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


module.exports=router;
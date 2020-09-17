const express=require('express');
const Joi=require('joi')
const router=express.Router();
const Restaurant=require('../models/restaurants.model')

router.get('/',(req,res)=>{
    
    Restaurant.find((err,result)=>{
        if(err)
         res.status(404).send(err);
         else
         res.status(200).send(result)
    })
})
router.get('/:id',(req,res)=>{
    
    Restaurant.findById({_id:req.params.id},(err,result)=>{
        if(err)
         res.status(404).send(err);
         else
         res.status(200).send(result)
    })
    })
    // function validateRestaurant(restaurant){
    //     const schema={
    //         id:Joi.number().required(),
    //         name:Joi.string().min(3).required(),
    //         type:Joi.string().required(),
    //         address:Joi.string().required(),
    //         contactno:Joi.number().required()
            


    //     };
    //     return Joi.validate(restaurant,schema)
    // }
        router.post('/',(req,res)=>{
            
            // const result=validateRestaurant(req.body)
            // if(result.error){
            //     return res.status(404).send(result.error.details[0].message);
            // }
            
            
            let newRestaurant=new Restaurant({
                name:req.body.name,
                type:req.body.name,
                address:req.body.address,
               contactno:req.body.contactno
            })
            newRestaurant.save((err,result)=>{
                if(err) console.log(err);
                else res.status(200).send(result)
            })
            
        })
        router.delete('/:id',(req,res)=>{
            
            Restaurant.findByIdAndDelete({_id:req.params.id},(err,result)=>{
                if(err)
                 res.status(404).send(err);
                 else
                 res.status(200).send(result)
            })
            
        })
        router.put('/:id',(req,res)=>{
            
            Restaurant.findOneAndUpdate({_id:req.params.id},{$set:{name:req.body.name,type:req.body.type,address:req.body.address,contactno:req.body.contactno}},
                (err,result)=>{
                    if(err)
                    res.status(404).send(err);
                 else
                 res.status(200).send(result)
                })
        })
    module.exports=router
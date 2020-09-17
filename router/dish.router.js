const express=require('express');
const Joi=require('joi')
const router=express.Router();
const Dish=require('../models/dishes.model')

router.get('/',(req,res)=>{
    
    Dish.find((err,result)=>{
        if(err)
         res.status(404).send(err);
         else
         res.status(200).send(result)
    })
})
router.get('/:id',(req,res)=>{
    
    Dish.findById({_id:req.params.id},(err,result)=>{
        if(err)
         res.status(404).send(err);
         else
         res.status(200).send(result)
    })
    })
    // function validateDish(dish){
    //     const schema={
    //         id:Joi.number().required(),
    //         name:Joi.string().min(3).required(),
    //         type:Joi.string().required(),
    //         cost:Joi.number().required(),
    //         category:Joi.string().required(),
    //         poster:Joi.string().required()
    //     };
    //     return Joi.validate(dish,schema)
    // }
        router.post('/',(req,res)=>{
            
            // const result=validateDish(req.body)
            // if(result.error){
            //     return res.status(404).send(result.error.details[0].message);
            // }
            
            
            let newDish=new Dish({
                name:req.body.name,
                type:req.body.type,
                cost:req.body.cost,
                category:req.body.category,
                poster:req.body.poster,
                description:req.body.description
            })
            newDish.save((err,result)=>{
                if(err) console.log(err);
                else res.status(200).send(result)
            })
            
        })
        router.delete('/:id',(req,res)=>{
            
            Dish.findByIdAndDelete({_id:req.params.id},(err,result)=>{
                if(err)
                 res.status(404).send(err);
                 else
                 res.status(200).send(result)
            })
            
        })
        router.put('/:id',(req,res)=>{
            
            Dish.findOneAndUpdate({_id:req.params.id},{$set:{name:req.body.name,type:req.body.type,cost:req.body.cost,category:req.body.category, poster:req.body.poster, description:req.body.description}},
                (err,result)=>{
                    if(err)
                    res.status(404).send(err);
                 else
                 res.status(200).send(result)
                })
        })
    module.exports=router

const express=require('express');

const router=express.Router();
const Cart=require('../models/cart.model.js')

router.post('/',(req,res)=>{
    let newCart=new Cart({
        name:req.body.name,
        type:req.body.type,
        cost:req.body.cost,
        category:req.body.category,
        poster:req.body.poster,
        description:req.body.description
        
    })
    newCart.save((err,result)=>{
        if(err) console.log(err);
        else res.status(200).send(result)
    })
})
router.delete('/:id',(req,res)=>{
            
    Cart.findByIdAndDelete({_id:req.params.id},(err,result)=>{
        if(err)
         res.status(404).send(err);
         else
         res.status(200).send(result)
    })
    
})
router.get('/',(req,res)=>{
    
    Cart.find((err,result)=>{
        if(err)
         res.status(404).send(err);
         else
         res.status(200).send(result)
    })
})
module.exports=router;
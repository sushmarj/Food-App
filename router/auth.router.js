const {User}=require('../models/users.model');
const express= require('express');
const _=require('lodash');
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const config=require('config');
const router=express.Router();

const Joi=require('joi');
router.post('/',async(req,res)=>{
    //check for validation error
    const {error}=validate(req.body)
    if(error)
    return res.status(400).send(error.details[0].message);
    //check for existence of user
    const user=await User.findOne({email:req.body.email});
    //if user not found send appropriate message
    if(!user)
    return res.status(400).send("invalid Email or password");
    //compare password:if its wrong then send message
    const validPassword=await bcrypt.compare(req.body.password,user.password);
    if(!validPassword)
    return res.status(400).send("invalid Email or password");
    const token=jwt.sign({_id:user._id,email:user.email},config.get('jwtPrivateKey'))
    res.send(token)
   
})
function validate(user){
    const schema={
        
        email:Joi.string().min(5).max(255).required().email(),
        password:Joi.string().min(5).max(1024).required(),

    }
    return Joi.validate(user,schema);
};
module.exports=router
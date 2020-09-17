const {User,validate}=require('../models/users.model');
const auth=require('../middleware/auth.middleware.js')
const express= require('express');
const _=require('lodash');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken')
const config=require('config');
const router=express.Router();
router.get('/me',auth,async(req,res)=>{
    const user=await User.findById({_id:req.user._id}).select("-password");
    res.send(user)
})
router.post('/',async(req,res)=>{
    //check for validation error
    // const {error}=validate(req.body)
    // if(error)
    // return res.status(400).send(error.details[0].message);
    //check for existence
    let user=await User.findOne({email:req.body.email});
    if(user)
    return res.status(400).send("User already registered");
    //create new User
    let newUser=new User(_.pick(req.body,['name','email','password']))
    const salt=await bcrypt.genSalt(10);
    newUser.password=await bcrypt.hash(newUser.password,salt)
    await newUser.save();
    const token=jwt.sign({_id:newUser._id,email:newUser.email},config.get('jwtPrivateKey'))
    res.header('x-auth-token',token)
    .status(200).send(json.parse(_.pick(newUser,['_id','name','email'])))
})
module.exports=router
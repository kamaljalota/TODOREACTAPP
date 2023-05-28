const express = require('express');
const User = require('../models/User');
const router = express.Router();
const {body, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWTScret = "kamalj";
const fetch = require('../middle/fetch')


router.post('/',[body('name').isLength({min : 5}), body('email').isEmail(), body('password').isLength({min : 5})],async (req,res)=>{
 let success = false;
    const errors = validationResult(req);
 if(!errors.isEmpty()){
    success = false;
return res.status(400).json({success,errors :errors.array()});
 }
 let user = await User.findOne({email : req.body.email});
 if(user){
    success = false;
    return res.json({success,errors :"User already exit"});
 }
 const salt = await bcrypt.genSaltSync(10);
const pass = await bcrypt.hash( req.body.password, salt);
    user =  await User.create({
        name : req.body.name,
        email : req.body.email,
        password : pass
    })
    const data = {
        user :{
            id : user.id
        }
    }
     success = true;
    const token = jwt.sign(data, JWTScret);
    res.json({success,token});

})
router.post('/login',[body('email').isEmail(), body('password').isLength({min : 5})],async (req,res)=>{
    let success = false;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        success = false;
   return res.status(400).json({errors :errors.array()});
    }
    let user = await User.findOne({email : req.body.email});
    if(!user){
        success = false;
       return res.json({errors :"User not valid"});
    }
    let password = await bcrypt.compare(req.body.password,user.password);
    if(!password){
       return res.json({errors :"password not valid"});
    }
    const data = {
      user :{
          id : user.id
      }
  }
  success = true;
  const token = jwt.sign(data, JWTScret);
  res.json({success,token});
   
   })
router.post('/loginwithauth',fetch,[body('email').isEmail(), body('password').isLength({min : 5})],async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
   return res.status(400).json({errors :errors.array()});
    }
    let user = await User.findOne({email : req.body.email});
    if(!user){
       return res.json({errors :"User not valid"});
    }
    let password = await bcrypt.compare(req.body.password,user.password);
    if(!password){
       return res.json({errors :"password not valid"});
    }
    user = await User.findById(req.id).select("-password");
       res.json({user});
   
   })
module.exports= router
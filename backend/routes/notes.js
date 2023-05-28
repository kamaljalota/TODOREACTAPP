const express = require('express');
const Notes = require('../models/Notes');
const router = express.Router();
const fetch = require('../middle/fetch');
const {body, validationResult} = require('express-validator');

router.post('/createnotes',fetch,[body('title').isLength({min : 5}), body('description').isLength({min : 5}), body('tag').isLength({min : 5})],async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
   return res.status(400).json({errors :errors.array()});
    }
      const notes =  await Notes.create({
           title : req.body.title,
           description : req.body.description,
           tag : req.body.tag,
           user : req.id
       })
       res.json({notes});
   
   })
   router.get('/fetchnotes',fetch,async (req,res)=>{
      const notes =  await Notes.find({user : req.id})
       res.json({notes});
   
   })


   router.put('/update/:id',fetch,[body('title').isLength({min : 5}), body('description').isLength({min : 5}), body('tag').isLength({min : 5})],async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
   return res.status(400).json({errors :errors.array()});
    }
    let newdata = {};
    if(req.body.title){
        newdata.title = req.body.title;
    }
    if(req.body.description){
        newdata.description = req.body.description;
    }
    if(req.body.tag){
        newdata.tag = req.body.tag;
    }
      let notes =  await Notes.findById(req.params.id);
      console.log(notes);
      if(!notes){
        return res.send("no notes of this id");
         }
         console.log(req.id,notes.user.toString(),notes.user);
         if(notes.user.toString() !== req.id){
            return res.send("no user of this id");
         }
         notes = await Notes.findByIdAndUpdate(req.params.id,{$set : newdata}, {new : true});
         console.log(notes);
       res.json({notes});
   
   })

   router.delete('/delete/:id',fetch,async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
   return res.status(400).json({errors :errors.array()});
    }
   
      let notes =  await Notes.findById(req.params.id);
      console.log(notes);
      if(!notes){
        return res.send("no notes of this id");
         }
         console.log(req.id,notes.user.toString());
         if(notes.user.toString() !== req.id){
            return res.send("no user of this id");
         }
         notes = await Notes.findByIdAndDelete(req.params.id);
    
       res.json({"success" : "sucsess"});
   
   })
   module.exports= router
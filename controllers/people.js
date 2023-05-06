const express = require("express");
const router = express.Router();
const People = require('../models/People');
//GET

router.get('/', async (req,res)=>{
    try{
        res.json(await People.find({})).status(200)
    } catch(err){
        res.status(400).json(err)
    } finally {
        console.log("This is finally")
    }
});

router.post('/', async (req,res)=>{
    try{
        res.json(await People.create(req.body))
    }catch(err){
        res.status(400).json(err)
    }
});

router.put('/:id', async (req,res)=>{
    try{
        res.json(await People.findByIdAndUpdate(req.params.id, req.body, { new : true}))

    }catch(err){
        res.status(400).json(err)
    }
});

router.delete('/:id', async (req,res)=>{
    try{
        res.json(await People.findByIdAndRemove(req.params.id))

    }catch(err){
        res.status(400).json(err)
    }
    
});

module.exports  = router;

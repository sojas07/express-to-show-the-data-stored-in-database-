const express = require('express');
const router = express.Router();
const Alien = require('../models/alien');

router.get('/', async(req,res)=>{
    try{
        console.log(req.body);
        const aliens = await Alien.find();
        res.json(aliens);
    }catch(err){
        res.send("error");
    }
})



// router.post('/', async(req,res)=>{
//     const alien = new Alien({
//         name : req.body.name,
//         department : req.body.department,
//         email : req.body.email,
//         empid : req.body.empid
//     })

//     try{
//         const a1 = await alien.save();
//         res.json(a1);

//     }catch(err){
//         res.send('errorkk');
//     }
// })

// router.delete('/:id', async(req,res)=>{
//     try{
//         const a1 = await Alien.remove({_id:req.params.id});
//     }catch(error){
//         res.send(error);
//     }
// })

// router.patch('/:department', async(req,res)=>{
//     try{
//         const al = await Alien.find({department : req.params.department});
//         al.sub=req.body.sub
//         const a1 = await al.save()
//         res.json(a1)
//     }catch(error){
//         res.send(error);
//     }
// })

// router.get('/:department', async(req,res)=>{
//         try{
//             const al = await Alien.find({department : req.params.department});
//             res.send(al)
//         }catch(error){
//             res.send(error);
//         }
//     })

module.exports = router;
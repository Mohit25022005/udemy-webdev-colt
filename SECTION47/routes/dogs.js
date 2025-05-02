const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('Dog home page')
})

router.get('/:id',(req,res)=>{
    res.send('find dog by id')
})
router.get('/:id/edit',(req,res)=>{
    res.send("Editing one dog");
})

module.exports = router;
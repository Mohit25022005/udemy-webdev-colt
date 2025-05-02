const express = require('express');
const router = express.Router();


router.use((req,res,next)=>{
    if(req.query.isAdmin){
        next();
    }
    res.send('SORRY NOT A ADMIN')
})

router.get('/topsecret',(req,res)=>{
    res.send('this is top secret')
})

router.get('/deleteall',(req,res)=>{
    res.send('OK DELETED IT ALL!')
})


module.exports = router;
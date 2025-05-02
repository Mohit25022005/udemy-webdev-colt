const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser('thisismysecret'));

app.get('/greet',(req,res)=>{
    const {name='no-name'} = req.cookies;
    res.send(`Hey there ${name}`);
})

app.get('/setname',(req,res)=>{
    res.cookie('name','mohit');
    res.cookie('animal','pug')
    res.send('OK SEND YOU A COOKIE')
})

//signed cookie
app.get('/getsignedcookie',(req,res)=>{
    res.cookie('fruit','grape',{signed:true});
    res.send('this is an example of signed cookie')
})
app.get('/verifyfruit', (req, res) => {
    res.send(req.signedCookies);  // Correct way to access signed cookies
});


app.listen(3000,()=>{
    console.log('server running at 3000');
})



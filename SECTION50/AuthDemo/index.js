const express =require('express');
const app = express();
const User= require('./models/user');
const bcrypt = require('bcrypt');
const session = require('express-session')

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/authDemo')
    .then(()=>{
        console.log("mongo connection open");
    })
    .catch((err)=>{
        console.log("oh no mongo connection error");
        console.log(err)
    })

app.set('view engine','ejs');
app.set('views','views');

app.use(express.urlencoded({extended:true}))
app.use(session({secret:'notagoodsecret'}))

const requireLogin = (req,res,next)=>{
    if(!req.session.user_id){
        res.redirect('/login')
    }
    next();
}

app.get('/',(req,res)=>{
    res.send("this is the home page")
})

app.get('/register',(req,res)=>{
    res.render('register');
})

app.post('/register',async(req,res)=>{
    // res.send(req.body);
    const {password,username} = req.body;
    const user= new User({username,password})
    await user.save();
    req.session.user_id = user._id;
    res.redirect('/');
})


app.get('/login',(req,res)=>{
    res.render('login');
})

app.post('/login', async(req,res)=>{
    const {username, password}  = req.body;
    const foundUser = await User.findAndValidate(username,password)
    if(foundUser){
        req.session.user_id = foundUser._id;
        res.redirect('/secret');

    }else{
        res.redirect('/login');
    }
})

app.post('/logout',(req,res)=>{
    //req.session.user_id= null;
    req.session.destroy();
    res.redirect('/login');
}) 


app.get('/secret',requireLogin,(req,res)=>{
    
    res.render('secret');
})

app.get('/topsecret',requireLogin,(req,res)=>{
    res.send('top secret')
})

app.listen(3000,()=>{
    console.log("serving your app");
})
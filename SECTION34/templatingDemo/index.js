
const  express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');
// console.log(redditData)

app.use(express.static(path.join(__dirname,'public')))


app.set('view engine','ejs');
//below is used to run index.js form a directory above current directory 
app.set('views',path.join(__dirname,'/views'))


app.get('/',(req,res)=>{
    res.render('home')
})

app.get('/cats',(req,res)=>{
    const cats =['Blue','Rocket','Monty','Stephanie','Winston']
    res.render('cats',{cats});

})

app.get('/r/:subreddit',(req,res)=>{
    const {subreddit}=req.params;
    const data = redditData[subreddit];
    // console.log(data)
    if(data){
        res.render('subreddit',{...data});
    }else{
        res.render('notfound',{subreddit})
    }
})

app.get('/rand',(req,res)=>{
    const num =  Math.floor(Math.random()*10)+1
    res.render('random',{num})
})

app.listen(3000,()=>{
    console.log("Listening on port 3000")
})
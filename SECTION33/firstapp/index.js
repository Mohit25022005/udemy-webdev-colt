const express = require("express");

const app = express();

// console.dir(app)
//request and response object
// app.use((req,res)=>{
//     console.log("We got a new request!!!")
//     // res.send("Hello ,we got your request")
//     // res.send({color:'red'})
//     res.send('<h1>This is my webpage</h1>')
// })

//Express routing basics
// /cats=>'meow'
app.get('/',(req,res)=>{
    res.send("this is the home page ")
})

//Express Path parameters
app.get('/r/:subreddit',(req,res)=>{
    const {subreddit}= req.params;
    res.send(`<h1>Browsing the ${subreddit}</h1>`)
    //res.send("THIS IS A SUBREDDIT"); //DONT SENT MULTIPLE SEND REQUESTSSSS!!
})
app.get('/r/:subreddit/:postId',(req,res)=>{
    const {subreddit,postId}= req.params;
    res.send(`<h1>Viewing the post ID :${postId} on the  ${subreddit} subreddiet </h1>`)
    
})
app.get('/search',(req,res)=>{
    const {q} = req.query;
    if(!q){
        res.send('NOTHING FOUND ,NOTHING SEARCHED');
    }
    res.send(`<h1>Search results for ${q}</h1>`)
})





app.post('/cats',(req,res)=>{
    res.send("Post request to /cats this is different than get request")
})
app.get('/cats',(req,res)=>{
    //console.log("CAT REQUEST!!")
    res.send("meow");
})
app.get('/dogs',(req,res)=>{
    res.send("WOOF")
})


app.listen(3000,()=>{
    console.log("Listening on port 3000!")
})
//always keep it in last
app.get('*',(req,res)=>{
    res.send(`I dont know that path`)
})







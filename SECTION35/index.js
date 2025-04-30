const express = require('express');
const app = express();
const path = require('path');
const {v4:uuid} = require('uuid')
const methodOverride = require('method-override')

//written form express docs

app.use(express.urlencoded({extended:true})) //use to parse the body(only for form data)
app.use(express.json()) //parsing data if json file
app.use(methodOverride('_method'))

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

let comments = [
    {
        id:uuid(),
        username: 'Todd',
        comment :'lol that is so funny!'
    },
    {

        id:uuid(),
        username:'Skyler',
        comment :'I like to go birdwatching with my dog'
    },
    {
        id:uuid(),
        username:'SkterBoi',
        comment :'Plz delete your account ,Todd'
    },{
        id:uuid(),
        username:'onlysaywoof',
        comment :'woof woof woof'
    }
]
//CRUD(Create , read , update ,delete )
//read /comments GET Display all comments
app.get('/comments',(req,res)=>{
    res.render('comments/index',{comments})
})
//create 
app.get('/comments/new',(req,res)=>{
    res.render('comments/new');
})
app.post('/comments',(req,res)=>{
    const {username,comment } = req.body;
    comments.push({username,comment,id:uuid() })
    //res.send("IT WOrked");

    res.redirect('/comments'); //default 302
})

//show /comments/:id   GET  Details for specific comments
app.get('/comments/:id',(req,res)=>{
    const {id} = req.params;      
    const comment = comments.find(c =>c.id ===(id))
    res.render('comments/show',{comment});
})
//updating comments
app.patch('/comments/:id',(req,res)=>{
    const {id} = req.params; 
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c =>c.id ==(id));
    //res.send('updating some thing')
    foundComment.comment = newCommentText;
    res.redirect('/comments')
})
//html forms can only gitve get or post request 
app.get('/comments/:id/edit',(req,res)=>{
    const {id} = req.params;
    const comment = comments.find(c=>c.id===id);
    res.render('comments/edit',{comment})
})

//Delete or destroy
app.delete('/comments/:id',(req,res)=>{
    const {id} = req.params;
    comments = comments.filter(c=>c.id!==id); //dont mutate the origional array instead create a new array which does not contain  the particular id
    res.redirect('/comments');

})



















app.get('/tacos',(req,res)=>{
    res.send("GET /tacos response")
})
app.post("/tacos",(req,res)=>{
    const {meat,qty} = req.body;
    res.send(`Ok ,here are your ${qty} ${meat}`);
})


app.listen(3000,()=>{
    console.log("ON PORT 3000")
})

//Restfull APIs
// GET/comments - list all comments
// POST/comments - Create a new Comment
// GET /comment/:id - Get one comment (using ID)
// PATCH /comment/:id - Update one comment
// DELETE /comments/:id - Destroy one comment


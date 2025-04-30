const express = require('express');
const app = express();

const mongoose = require('mongoose');

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/test');
//     console.log('Connected to database');
//   // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
// }

mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
  .then(() => {
    console.log('Connected to database');
  })
  .catch(err => {
    console.log('Error connecting to database', err);
  });


// {
//     title: 'Harry Potter',
//     year: 2000,
//     score: 10,
//     rating: 'PG'

// }
//Defining Schema
const movieSchema = new mongoose.Schema({
    title:String,
    year:Number,
    score:Number,
    rating:String
})

const Movie = mongoose.model('Movie',movieSchema);
// const amadeus = new Movie({title:'Amadeus',year:1986,score:9.2,rating:'R'})


// Movie.insertMany([
//   {title:'Coolie',year:2001,score:2.1,rating:'R'},
  
// ])
// .then(data=>{
//   console.log("IT WORKED!!");
//   console.log(data);
// })


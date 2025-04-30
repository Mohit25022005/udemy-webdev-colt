// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]


// numbers.forEach(function (el){
//     if(el%2===0){
//         console.log(el)

//     }
// })




// const movies = [
//     {
//         title:'Amadues',
//         score: 99
//     },
//     {
//         title: 'Stand by me',
//         score:85
//     },
//     {
//         title: 'Parasite',
//         score:95
//     },{
//         title: 'Alien',
//         score:90
//     }
// ]
// movies.forEach(function(movie){
//     console.log(`${movie.title} - ${movie.score}/100`)
// })



//MAP practice
// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

// const doubles=numbers.map(function(num){
//     return num*2;
// })

// const movies = [
//     {
//         title:'Amadues',
//         score: 99
//     },
//     {
//         title: 'Stand by me',
//         score:85
//     },
//     {
//         title: 'Parasite',
//         score:95
//     },{
//         title: 'Alien',
//         score:90
//     }
// ]
// const titles=movies.map(function(movie){
//     return movie.title.toUpperCase()
// })



//ARROW FUNCTION

// const add = (x,y)=>{
//     return x+y;
// }

// const square = (x)=>{
//     return x**2
// }

// const rollDie = ()=>{
//     return Math.floor(Math.random() * 6)+1
// }

//IMPLICIT RETURNS (only when single expression is to be evaluate and returend)
// const rollDie = ()=>(
//     Math.floor(Math.random() * 6)+1
// )

// const add2 = (a,b)=>a+b

// const movies = [
//         {
//             title:'Amadues',
//             score: 99
//         },
//         {
//             title: 'Stand by me',
//             score:85
//         },
//         {
//             title: 'Parasite',
//             score:95
//         },{
//             title: 'Alien',
//             score:90
//         }
//     ]

// const newMovies=    movies.map(function(movie){
//         return `${movie.title} - ${movie.score}/100`
//     })
// const newMovies = movies.map(movie=>(
//      `${movie.title} - ${movie.score}/100`
// ))


//settime out
// console.log("Hello")
// setTimeout(()=>{
//     console.log("are you still there")

// },3000)


// const id=setInterval(()=>{
//     console.log(Math.random())
// },2000);

//the filter method
// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
// numbers.filter(n=>{
//     return n<10
// })

// const movies = [
//             {
//                 title:'Amadues',
//                 score: 99
//             },
//             {
//                 title: 'Stand by me',
//                 score:85
//             },
//             {
//                 title: 'Parasite',
//                 score:95
//             },{
//                 title: 'Alien',
//                 score:90
//             }
//         ]
// const goodMovies=movies.filter(movie =>{
//     return movie.score>80
// })



//every and some

// const exams = [80,98,92,78,77,89,90,84,81,77]

// exams.every(score => score>=75)

//reduce 
const prices = [9.99,1.50,19.99,49.99,3.05];
// let total =0;
// for(let price of prices){
//     total+=price
// }
// console.log(total)
// const total = prices.reduce((total,price)=>{
//     return total+price
// })
// const minPrice=prices.reduce((min,price)=>{
//     if(price<min){
//         return price
//     }
//     return min
// })







//keyword this behaves differently inside arroy function than regular function
const person = {
    firstName:'Viggo',
    lastName:'Mortensen',
    fullName:function(){
        return `${this.firstName} ${this.lastName}`
    },
    shoutName:function(){
        setTimeout(()=>{
            console.log(this.fullName())
        },3000)
    }
    
}
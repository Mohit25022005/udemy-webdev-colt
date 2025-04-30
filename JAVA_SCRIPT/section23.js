// function rollDie(numside){
//     if(numside===undefined){
//         numside=6;
//     }
//     return Math.floor(Math.random()*numside)+1
// }

//DEFAULT ARGUMENT
// function rollDie(numside = 6){
//     return Math.floor(Math.random()*numside)+1
// }

// function greet(person,msg="Hey there"){
//     console.log(`${msg} ${person}!`)
// }


//SPREAD
// const cats = ['blue','scout','rocket'];
// const dogs = ['rusty','Whatt'];

// const allPets=[...cats,...dogs];

// const feline = {legs:4,family:'Felidae'};
// const canine = {isFurry:true,family:'caniane'}
// const catDog = {...feline,...canine}

// const dataFormForm ={
//     email:'blueman.@fmail',
//     password:'tobias123!',
//     username:'taaks'
// }
// const newUser = {...dataFormForm,id:123,isAdmin:false}



//REST (automatially holds all the arguments passed to the funciton)
// function sum(...nums){
//     console.log(nums);
//     return nums.reduce((total,el)=>total+el)
    
// }

// function raceResult(gold,siler,...everoneElse){
//     console.log(`Gold medal goes to :${gold}`)
//     console.log(`silver medal goes to :${siler}`)
//     console.log(`and thanks to every one else :${everoneElse}`)
// }


//DESTRUCTURING 
// const scores=[1,23,4,5,6,8]
// const [gold,silver,bronze,...everyoneelse]=scores;

// const user = {
//     email:'harr@gmail.com',
//     password:'asdaf',
//     firstName:'milk',
//     lastName:'harwa',
//     born:1234,
//     died:1322,
//     bio:'Harvey was a politican',
//     city:'sna fransisco',
//     state:'california'

// } 

// const {email,firstName,state,hobby='piano'} = user  //using the keys to store value

// const {born:birthYear}=user  //changing variable name


//PARAM Destructuring

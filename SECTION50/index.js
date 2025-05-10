const bcrypt = require('bcrypt');

// const hashPassword = async(pw)=>{
//     const salt = await bcrypt.genSalt(12);
//     const hash = await bcrypt.hash(pw,salt);
//     console.log(hash)
//     console.log(salt);
// }

const hashPassword = async(pw)=>{
    
    const hash = await bcrypt.hash(pw,12);
    console.log(hash)
}



const login = async(pw,hashedPassword)=>{
    const result = await bcrypt.compare(pw,hashedPassword)
    if(result){
        console.log("Logged you in successful match");
    }
    else{
        console.log("Incorrect")
    }
}   

//hashPassword('monkey');
login('monkey','$2b$12$MsGhLlkzy9d9VT4fiSIK1eTpJc0v2I7aFWa/MrhVXVQBMQXftB0zO')
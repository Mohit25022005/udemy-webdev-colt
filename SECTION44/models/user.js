const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/relationDemo')
    .then(()=>{
        console.log("MONGO CONNECTION OPEN!!")
    })
    .catch(err=>{
        console.log("OH NO MONGO CONNNECTION ERROR!!!")
        console.log(err)
    })


//one to few
const userSchema= new mongoose.Schema({
    first:String,
    last:String,
    addresses:[{
        _id:{_id:false},
        street:String,
        city:String,
        state:String,
        country:String
    }]
})


const User = mongoose.model('User',userSchema);

const makeUser = async()=>{
    const u = new User({
        first:"Mohit",
        last:'Swarnkar',
    })

    u.addresses.push({
        street:'123 Seasme St.',
        city:'New York',
        state:'NY',
        country: 'USA'
    })
    const res = await u.save()
    console.log(res)
}

const addAddress = async(id)=>{
    const user = await User.findById(id);
    user.addresses.push(
        {
            street:'99 3rd St.',
            city:'New York',
            state:'NY',
            country:'USA'
        }
    )
    const res = await user.save()
    console.log(res)
}
addAddress('67f04253164707e0552ac1bc')
makeUser();



const mongoose = require('mongoose');
const {Schema} = mongoose;
mongoose.connect('mongodb://localhost:27017/relationDemo')
    .then(()=>{
        console.log("MONGO CONNECTION OPEN!!")
    })
    .catch(err=>{
        console.log("OH NO MONGO CONNNECTION ERROR!!!")
        console.log(err)
    })


const productSchema = new Schema({
    name:String,
    price:Number,
    season:{
        type:String,
        enum:['Spring','Summer','Fall','Winter']
    }
});
const farmSchema = new Schema({
    name:String,
    city:String,
    products:[{type:Schema.Types.ObjectId, ref:'Product' }]
})

const Product  = mongoose.model('Product',productSchema);
const Farm  = mongoose.model('Farm',farmSchema);


// Product.insertMany([
//     {name:'Goddess Melon',price:4.99,season:'Summer'},
//     {name:'Sugar baby Melon',price:4.99,season:'Summer'},
//     {name:'Asparagus',price:3.99,season:'Spring'}

// ])


// const makefarm = async ()=>{
//     const farm = new Farm({ name: 'Full Belly Farms', city: 'Guinda, CA'})
//     const melon =await Product.findOne({name:'Goddess Melon'});
//     farm.products.push(melon);
//     await farm.save();
//     console.log(farm);
// }

// makefarm();

const addProduct = async () => {
    const farm = await Farm.findOne({ name: 'Full Belly Farms' });  // ✅ corrected
    if (!farm) {
        console.log('❌ Farm not found');
        return;
    }

    const watermelon = await Product.findOne({ name: 'Sugar baby Melon' });
    if (!watermelon) {
        console.log('❌ Product not found');
        return;
    }

    farm.products.push(watermelon);
    await farm.save();  // ✅ Don't forget to await this
    console.log('Product added to farm:');
    console.log(farm);
};


// addProduct();
Farm.findOne({name:'Full Belly Farm'})
    .populate('products')
    .then(farm=>console.log(farm))
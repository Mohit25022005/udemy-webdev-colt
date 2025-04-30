const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride =  require('method-override');
const Product = require('./modals/product');


mongoose.connect('mongodb://localhost:27017/farmStand')
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO ERROR!!!!")
        console.log(err)
    })




app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))

const categories = ['fruit','vegetables','dairy','mushroom'];
app.get('/products',async (req,res)=>{
    const {category} = req.query;
    if(category){
        const products = await Product.find({category })
        res.render('products/index',{products,category})

    }else{
        const products = await Product.find({})
        res.render('products/index',{products,category :'ALL'})
    }
    //console.log(products)
})

app.get('/products/new', (req, res) => {
    console.log("Categories passed to new.ejs:", categories); // Debugging log
    res.render('products/new', { categories });
});


app.post('/products',async (req,res)=>{
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`)
})

app.get('/products/:id',async (req,res)=>{
    const {id}=req.params;
    const product = await Product.findById(id);
    console.log(product);
    res.render('products/show',{product});
   
})

app.get('/products/:id/edit',async (req,res)=>{
    const {id}=req.params;
    const product = await Product.findById(id);
    res.render('products/edit',{ product,categories })
})

//as in for we cannnot use post req so we go with method-override package
app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    res.redirect(`/products/${id}`);
});

app.delete('/product/:id',async(req,res)=>{
    const {id} = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products');
})



app.listen(3000,()=>{
    console.log("APP IS LISTENING ON PORT 3000!")
})



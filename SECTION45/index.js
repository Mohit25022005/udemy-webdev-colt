const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const AppError = require('./AppError'); // Custom error handling class

const Product = require('./models/product'); // Importing the Product model
const Farm = require('./models/farm')
// Connecting to MongoDB
mongoose.connect('mongodb://localhost:27017/farmStandTake2')
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

// Setting up view engine and views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware to parse URL-encoded data and override HTTP methods
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


//FARM ROUTES

app.get('/farms',async(req,res)=>{
    const farms= await Farm.find({});
    res.render('farms/index',{farms});
})

app.get('/farms/new',(req,res)=>{
    res.render('farms/new')
})

app.post('/farms',async(req,res)=>{
    const farm = new Farm(req.body);
    await farm.save();
    res.redirect('/farms')
})

app.get('/farms/:id',async(req,res)=>{
    const farm = await Farm.findById(req.params.id).populate('products')
    res.render('farms/show',{farm})
})

app.delete('/farms/:id',async(req,res)=>{
    const farm = await Farm.findByIdAndDelete(req.params.id);
    
    res.redirect('/farms');

})




app.get('/farms/:id/products/new',async(req,res)=>{
    const {id} = req.params;
    const farm = await Farm.findById(id);
    res.render('products/new',{categories,farm})
})

app.post('/farms/:id/products',async(req,res)=>{
    const {id} =req.params;
    const farm = await Farm.findById(id);
    const {name,price,category} = req.body;
    const product = new Product({name,price,category});
    farm.products.push(product);
    product.farm = farm;
    await farm.save();
    await product.save();
    res.redirect(`/farms/${id}`);
})




//PRODUCT ROUTES


// Predefined categories for products
const categories = ['fruit', 'vegetable', 'dairy'];

// Utility function to handle asynchronous errors
function wrapAsync(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(e => next(e)); // Catching errors and passing to next middleware
    }
}

// Route to display all products or filter by category
app.get('/products', wrapAsync(async (req, res, next) => {
    const { category } = req.query;
    if (category) {
        const products = await Product.find({ category });
        res.render('products/index', { products, category });
    } else {
        const products = await Product.find({});
        res.render('products/index', { products, category: 'All' });
    }
}));

// Route to render form for adding a new product
app.get('/products/new', (req, res) => {
    res.render('products/new', { categories });
});

// Route to create a new product
app.post('/products', wrapAsync(async (req, res, next) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`);
}));

// Route to display a single product by ID
app.get('/products/:id', wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id).populate('farm','name');
    if (!product) {
        throw new AppError('Product Not Found', 404); // Throwing error if product not found
    }
    res.render('products/show', { product });
}));

// Route to render edit form for a product
app.get('/products/:id/edit', wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
        throw new AppError('Product Not Found', 404);
    }
    res.render('products/edit', { product, categories });
}));

// Route to update a product
app.put('/products/:id', wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    res.redirect(`/products/${product._id}`);
}));

// Route to delete a product
app.delete('/products/:id', wrapAsync(async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products');
}));

// Function to handle Mongoose validation errors
const handleValidationErr = err => {
    console.dir(err);
    return new AppError(`Validation Failed...${err.message}`, 400);
};

// Middleware for handling validation errors
app.use((err, req, res, next) => {
    console.log(err.name);
    if (err.name === 'ValidationError') err = handleValidationErr(err);
    next(err);
});

// General error handling middleware
app.use((err, req, res, next) => {
    const { status = 500, message = 'Something went wrong' } = err;
    res.status(status).send(message);
});

// Start the server
app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!");
});




const express = require('express');
const app = express();
const morgan = require('morgan');

const AppError = require('./AppError');

// Middleware
app.use(morgan('dev'));

app.use('/dogs', (req, res, next) => {
    console.log('I LOVE DOGS');
    next();
});

const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === 'pannertikka') {
        return next();
    }
    return next(new AppError('Password required', 401));
};

// Routes
app.get('/', (req, res) => {
    res.send('HOME PAGE');
});

app.get('/dogs', (req, res) => {
    res.send('woof woof');
});

// Protected route
app.get('/secret', verifyPassword, (req, res) => {
    res.send('MY SECRET IS: Sometimes I wear earphones in public');
});

// Error testing route
app.get('/error', (req, res, next) => {
    try {
        chickien.fly();
    } catch (err) {
        next(err);
    }
});

app.get('/admin',(req,res)=>{
    throw new AppError('You are not admin', 403)
})

// 404 Handler (should be last)
app.use((req, res) => {
    res.status(404).send('Not Found');
});

// Centralized Error Handling Middleware
app.use((err, req, res, next) => {
    const { status = 500, message = 'Something went wrong' } = err;
    res.status(status).send(message);
});

// Start Server
app.listen(3000, () => {
    console.log(`App running on http://localhost:3000`);
});

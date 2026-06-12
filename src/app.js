// Load environment variables from .env file
require('dotenv').config(); 

// Imports

const expresss = require('express');
const app = expresss();
const authRoutes = require('./routes/auth.routes');

// Middleware
app.use(expresss.json());

// Routes
app.use('/api/auth', authRoutes);
app.get('/', (req, res) => {
    res.send('Welcome to the authentication API');
});

// Exports
module.exports = app;
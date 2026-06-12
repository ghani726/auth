// Load environment variables from .env file
require('dotenv').config(); 

// Imports

const expresss = require('express');
const app = expresss();
const authRoutes = require('./routes/auth.routes');
const postRoutes = require('./routes/post.routes');
const cookieParser = require('cookie-parser');
// Middleware
app.use(expresss.json());
app.use(cookieParser());
// Routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.get('/', (req, res) => {
    res.send('Welcome to the authentication API');
});

// Exports
module.exports = app;
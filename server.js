// Load environment variables from .env file
require('dotenv').config(); 

// Imports
const app = require('./src/app');
const connectDB = require('./src/db/db');

// Connect to MongoDB
connectDB();


// Start the server
app.listen(8000, () => {
    console.log('Server is running on port 8000');
});
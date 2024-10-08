// app.js
const express = require('express');
const cors = require('cors');
const  authRouter  = require('./routes/auth/auth_routes');

const app = express();

// Enable CORS
app.use(cors());


// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
// Middleware to parse JSON bodies
app.use(express.json());
app.use('/api/v1/auth',authRouter)

// Example route
app.get('/', (req, res) => {
    const jsonResponse = { message: 'Hello, World!', success: true };
    res.send(jsonResponse);});

// Export the app module
module.exports = app;

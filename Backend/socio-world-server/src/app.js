// app.js
const express = require('express');
const cors = require('cors');
const  authRoutes  = require('./routes/auth/auth_routes');
const cookieParser = require('cookie-parser');

const app = express();

// Enable CORS
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

// parse cookies from incoming requests
app.use(cookieParser());

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
// Middleware to parse JSON bodies
app.use(express.json());

// Example route
app.get('/', (req, res) => {
    const jsonResponse = { message: 'Hello, World!', success: true };
    res.send(jsonResponse);});

// auth routes
app.use('/api/v1/auth',authRoutes);
// Export the app module
module.exports = app;

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// Import middlewares
const responseFormatter = require('./middlewares/response_formatter');
const errorHandler = require('./middlewares/error_handler');

// Import routes
const authRoutes = require('./routes/auth/auth_routes');

const app = express();

// Enable CORS
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

// Middleware to parse cookies and request bodies
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Apply response formatter and error handler middleware
app.use(responseFormatter);
app.use(errorHandler);

// Example route
app.get('/', (req, res) => {
    const jsonResponse = { message: 'Hello, World!', success: true };
    res.success(jsonResponse);
});

// Auth routes
app.use('/api/v1/auth', authRoutes);

// Export the app module
module.exports = app;

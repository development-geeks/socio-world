// route_factory.js
const express = require('express');

const createRoutes = (routesConfig) => {
    const router = express.Router(); // Create a new router instance

    routesConfig.forEach(({ method, path, handler, middleware = [] }) => {
        // If the middleware is an array of functions, use them directly
        router[method](path, ...middleware, handler);
    });

    return router;
};

module.exports = createRoutes;

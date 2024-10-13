// routeFactory.js
const express = require('express');

const createRoutes = (routesConfig) => {
    const router = express.Router(); // Create a new router instance

    routesConfig.forEach(({ method, path, handler, middleware = [] }) => {
        // Dynamically apply middlewares and the handler
        const middlewares = middleware.map(mw => require(`../middlewares/${mw}`));
        router[method](path, ...middlewares, handler);
    });

    return router;
};

module.exports = createRoutes;

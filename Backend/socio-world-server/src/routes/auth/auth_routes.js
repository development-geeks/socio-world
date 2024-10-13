const createRoutes = require('../../factory/route_factory');
const loginController = require("../../controllers/auth_controller/login_controller");
const registerController = require("../../controllers/auth_controller/register_controller");
const refreshTokenController = require("../../controllers/auth_controller/refresh_token_controller");
const authRefreshTokenMiddleware = require('../../middlewares/auth_refresh_middleware');

// Configuration for the auth routes
const routesConfig = [
    {
        method: 'post',
        path: '/login',
        handler: loginController.login,
        middleware: [] 
    },
    {
        method: 'post',
        path: '/register',
        handler: registerController.register,
        middleware: [] 
    },
    {
        method: 'post',
        path: '/refresh',
        handler: refreshTokenController.getNewAccessToken,
        middleware: [authRefreshTokenMiddleware] 
    }
];

module.exports = createRoutes(routesConfig);

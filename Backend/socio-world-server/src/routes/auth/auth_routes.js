

const express = require('express');
const loginController = require("../../controllers/auth_controller/login_controller");
const registerController = require("../../controllers/auth_controller/register_controller");
const refreshTokenController = require("../../controllers/auth_controller/refresh_token_controller");
const authRefreshTokenMiddleware = require('../../middlewares/auth_refresh_middleware');

const router = express.Router();

router.post("/login",loginController.login );
router.post("/register",registerController.register );
router.post('/refresh',authRefreshTokenMiddleware,refreshTokenController.getNewAccessToken);

module.exports = router;
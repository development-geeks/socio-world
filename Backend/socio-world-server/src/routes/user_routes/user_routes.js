const createRoutes = require("../../factory/route_factory");
const auth_middleware = require("../../middlewares/auth_middleware");
const userController = require("../../controllers/user_controller/user_controller");

const routesConfig = [
  {
    method:"get",
    path:"/:id",
    handler:userController.getUserById,
    middleware:[auth_middleware]
  }
];

module.exports = createRoutes(routesConfig);
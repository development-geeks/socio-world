const userService = require("../../services/user_service/user_service")

const getUserById = async (req, res) => {
  const id = req.params.id;
  const user = await userService.getUserById(id);
  res.success(user);
};

module.exports = {getUserById}
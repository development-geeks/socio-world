const userService = require("../../services/user_service/user_service");
const userLoginService = require("../../services/auth_service/user_login_service");

const bcrypt = require("bcryptjs");
const { generateJwtToken } = require("../../utils/generate_jwt_token");

const login = async(req, res) => {

  const {username, password, rememberMe} = req.body;
  
  const user = await userService.getUserByUsername(username);
  if(!user){
    return res.error("Invalid Credentials", 400);
  };
  const userLogin = await userLoginService.getUserLoginByUserId(user.id);  
  const isValidPassword = await bcrypt.compare(password, userLogin.password);
  if(!isValidPassword){
    return res.error("Invalid Credentials", 400);
  }

  const accessToken = generateJwtToken({userId:user.id}, '1h');
  const refreshToken = generateJwtToken({userId:user.id}, '10d');
  res.cookie("remember_me", rememberMe || false, {
    httpOnly:true,
    sameSite: 'Strict',
    maxAge:rememberMe ? 10*24*60*60*1000 : null,
  })
  res.cookie("refresh_token", refreshToken, {
    httpOnly:true,
    sameSite: 'Strict',
    path:"/api/v1/auth/refresh",
    maxAge:rememberMe ? 10*24*60*60*1000 : null,
  })
  res.success({access_token:accessToken});
}

module.exports = {login}
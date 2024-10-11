const userService = require("../../services/user_service/user_service");
const userLoginService = require("../../services/auth_service/user_login_service");

const bcrypt = require("bcryptjs");
const { generateJwtToken } = require("../../utils/generate_jwt_token");

const login = async(req, res) => {

  const {username, password} = req.body;
  
  const user = await userService.getUserByUserUsername(username);
  if(!user){
    return res.status(401).json({message:"Invalid Credentials"});
  };
  const userLogin = await userLoginService.getUserLoginByUserId(user.id);  
  const isValidPassword = await bcrypt.compare(password, userLogin.password);
  if(!isValidPassword){
    return res.status(401).json({message:"Invalid Credentials"});
  }

  const accessToken = generateJwtToken({username:user.username}, '1h');
  const refreshToken = generateJwtToken({username:user.username}, '10d');
  res.cookie("refresh_token", refreshToken, {
    httpOnly:true,
    sameSite: 'Strict',
    path:"/api/v1/auth/refresh"
  })
  res.status(200).json({access_token:accessToken});
}

module.exports = {login}
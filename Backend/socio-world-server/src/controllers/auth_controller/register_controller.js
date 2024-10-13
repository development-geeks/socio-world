const userService = require("../../services/user_service/user_service")
const userLoginService = require("../../services/auth_service/user_login_service");
const { generateJwtToken } = require("../../utils/generate_jwt_token");

const register = async(req, res) => {
  try{
    const userData = req.body;
    const newUser = await userService.createUser(userData);

    await userLoginService.createUserLogin({
      userId:newUser.id,
      password:userData.password,
    });
    const accessToken = generateJwtToken({username:newUser.username}, '1h');
    const refreshToken = generateJwtToken({username:newUser.username}, '10d');  
    res.cookie("remember_me", userData.keepSignedIn || false, {
      httpOnly:true,
      sameSite: 'Strict',
      maxAge:userData.keepSignedIn ? 10*24*60*60*1000 : null,
    })
    res.cookie("refresh_token", refreshToken, {
      httpOnly:true,
      sameSite: 'Strict',
      path:"/api/v1/auth/refresh",
      maxAge:userData.keepSignedIn ? 10*24*60*60*1000 : null,
    })
    res.status(201).json({access_token:accessToken, message:"User registered Successfully"});
  }
  catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports={register}
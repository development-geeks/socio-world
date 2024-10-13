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
    if(userData.keepSignedIn){
      const accessToken = generateJwtToken({username:newUser.username}, '1h');
      const refreshToken = generateJwtToken({username:newUser.username}, '10d');  
      res.cookie("refresh_token", refreshToken, {
        httpOnly:true,
        sameSite: 'Strict',
        path:"/api/v1/auth/refresh",
      })
      res.status(201).json({access_token:accessToken, message:"User registered Successfully"});
    } else {
      res.status(201).json({message:"User registered Successfully" });
    }
  }
  catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports={register}
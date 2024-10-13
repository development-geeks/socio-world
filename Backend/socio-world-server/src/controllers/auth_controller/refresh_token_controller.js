const { generateJwtToken } = require("../../utils/generate_jwt_token");

const getNewAccessToken = (req, res) => {
  const user = req.user;  
  const accessToken = generateJwtToken({username:user.username},"1h");
  const refreshToken =  generateJwtToken({username:user.username},"10d");
  res.cookie("remember_me", rememberMe || false, {
    httpOnly:true,
    sameSite: 'Strict',
    maxAge:rememberMe ? 10*24*60*60*1000 : null,
  });
  res.cookie("refresh_token", refreshToken, {
    httpOnly:true,
    sameSite: 'Strict',
    path:"/api/v1/auth/refresh",
    maxAge:JSON.parse(user.rememberMe) ? 10*24*60*60*1000 : null,
  })
  res.status(200).json({access_token:accessToken});
};

module.exports = {getNewAccessToken}
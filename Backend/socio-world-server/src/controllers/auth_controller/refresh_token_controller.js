const { generateJwtToken } = require("../../utils/generate_jwt_token");

const getNewAccessToken = (req, res) => {
  const user = req.user;  
  const accessToken = generateJwtToken({userId:user.userId},"1h");
  const refreshToken =  generateJwtToken({userId:user.userId},"10d");
  res.cookie("remember_me", JSON.parse(user.rememberMe) || false, {
    httpOnly: true,
    sameSite: 'Strict',
    maxAge: JSON.parse(user.rememberMe) ? 10*24*60*60*1000 : null,
  });
  res.cookie("refresh_token", refreshToken, {
    httpOnly: true,
    sameSite: 'Strict',
    path: "/api/v1/auth/refresh",
    maxAge: JSON.parse(user.rememberMe) ? 10*24*60*60*1000 : null,
  })
  res.success({access_token:accessToken});
};

module.exports = {getNewAccessToken}
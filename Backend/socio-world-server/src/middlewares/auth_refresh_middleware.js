const jwt = require("jsonwebtoken")

const authRefreshTokenMiddleware = (req,res, next) => {
  const refreshToken = req.cookies.refresh_token;
  const rememberMe = req.cookies.remember_me;
  
  if(!refreshToken){
    return res.error("No Refresh Token", 400);
  }
  jwt.verify(refreshToken, process.env.JWT_SECRET, (err, user)=>{
    if(err){
      return res.error("Authentication Failed", 400);
    }    
    req.user = {...user, rememberMe:rememberMe};
    next();
  })
};

module.exports = authRefreshTokenMiddleware;
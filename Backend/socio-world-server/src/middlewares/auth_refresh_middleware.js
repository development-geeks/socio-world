const jwt = require("jsonwebtoken")

const authRefreshTokenMiddleware = (req,res, next) => {
  const refreshToken = req.cookies.refresh_token;
  const rememberMe = req.cookies.remember_me;
  
  if(!refreshToken){
    return res.status(401).json({message:"No Refreh Token"});
  }
  jwt.verify(refreshToken, process.env.JWT_SECRET, (err, user)=>{
    if(err){
      return res.status(401).json({message:"Authentication Failed"});
    }    
    req.user = {...user, rememberMe:rememberMe};
    next();
  })
};

module.exports = authRefreshTokenMiddleware;
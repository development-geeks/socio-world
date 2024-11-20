const jwt = require("jsonwebtoken")

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if(!token){
    return res.error("No token found.", 401);
  }

  jwt.verify(token, process.env.JWT_SECRET,(err, user)=>{
    if(err){
      return res.error("Authentication Failed", 401);
    }
    req.user = user;
    next();
  });
};

module.exports= authMiddleware;
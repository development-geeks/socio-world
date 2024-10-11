const jwt = require("jsonwebtoken")

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if(!token){
    return res.status(401).json({message:"No token found."});
  }

  jwt.verify(token, process.env.JWT_SECRET,(err, user)=>{
    if(err){
      return res.status(403).json({message:"Authentication Failed"})
    }
    req.user = user;
    next();
  });
};

module.exports= authMiddleware;
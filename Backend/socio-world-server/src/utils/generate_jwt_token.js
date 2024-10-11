const jwt = require("jsonwebtoken");

const generateJwtToken = (data, expiresIn) => {
  const token = jwt.sign(data, process.env.JWT_SECRET, {expiresIn:expiresIn});
  return token;
}

module.exports = {generateJwtToken}
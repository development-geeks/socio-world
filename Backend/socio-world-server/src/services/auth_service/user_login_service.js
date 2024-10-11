const UserLogin = require("../../db/models/user_login");
const { Sequelize } = require('sequelize');
const bcrypt = require("bcryptjs");


const createUserLogin = async(userLoginData) => {
  try{
   const {userId, password} = userLoginData;
   const hashedPassword = await bcrypt.hash(password, 10);
   const newLoginUser = await UserLogin.create({
     user_id:userId,
     password: hashedPassword,
   
   });    
   return newLoginUser;
  }

   catch (error) {
     console.error("Error in creating user: ", error.message);
     throw error; 
   }
}


const getUserLoginByUserId = async(userId) => {
  try{
   const foundUserLogin = await UserLogin.findOne({
     where: { [Sequelize.Op.or]: [{ user_id:userId }] }
   });
   return foundUserLogin;
  }
   catch (error) {
     console.error("Error in finding user: ", error.message);
     throw error; 
   }
}

module.exports = {getUserLoginByUserId, createUserLogin};
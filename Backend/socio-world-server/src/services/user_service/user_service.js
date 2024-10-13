const bcrypt = require("bcryptjs");
const { Sequelize } = require('sequelize');
const User = require("../../db/models/user");

const createUser = async(userData) => {
   try{
    const {first_name, middle_name,last_name, email, username, password} = userData;
    const existingUser = await User.findOne({
      where: { [Sequelize.Op.or]: [{ email }, { username }] }
    });

    if (existingUser) {
      throw new Error('User with this email or username already exists');
    }
    const newUser = await User.create({
      username,
      email,
      first_name,
      middle_name,
      last_name,
    });    
    return newUser;
   }

    catch (error) {
      console.error("Error in creating user: ", error.message);
      throw error; 
    }
}

const getUserByUserId = async(userId) => {
  try{
   const foundUser = await User.findOne({
     where: { [Sequelize.Op.or]: [{ user_id:userId }] }
   });

   return foundUser;
  }

   catch (error) {
     console.error("Error in finding user: ", error.message);
     throw error; 
   }
}

const getUserByUserUsername = async(username) => {
  try{
   const foundUser = await User.findOne({
     where: { [Sequelize.Op.or]: [{ username:username }] }
   });

   return foundUser;
  }

   catch (error) {
     console.error("Error in finding user: ", error.message);
     throw error; 
   }
}


module.exports={createUser, getUserByUserId, getUserByUserUsername}

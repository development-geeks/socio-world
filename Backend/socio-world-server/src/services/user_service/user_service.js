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

const getUserById = async(id) => {
  try{
   const foundUser = await User.findOne({
     where: { [Sequelize.Op.or]: [{ id:id }] }
   });

   return foundUser;
  }

   catch (error) {
     console.error("Error in finding user: ", error.message);
     throw error; 
   }
}

const getUserByUsername = async(username) => {
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


module.exports={createUser, getUserById, getUserByUsername}

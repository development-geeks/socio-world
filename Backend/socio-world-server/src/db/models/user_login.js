const {Model, Sequelize} = require("sequelize");

const sequelize =  require('../../config/connection');
const User = require('./user');  // Import the user model


module.exports = sequelize.define('user_login',{
  
    id: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    user_id: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: User, 
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    password: {
      type: Sequelize.STRING,
      allowNull:false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    deletedAt: {
      type: Sequelize.DATE,
    },
  
},{
  paranoid:true,
  freezeTableName:true,
  modelName:"user_login"
});
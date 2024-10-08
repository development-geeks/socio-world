'use strict';
import { Sequelize } from './../../../node_modules/sequelize/types/sequelize.d';
const {
  Model
} = require('sequelize');
const sequelize =  require('../../config/connection')
module.exports = sequelize.define('user',{
  user_id: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4, // Automatically generate UUID
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true, // Optional: enforce uniqueness
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true, // Optional: enforce uniqueness
  },
  first_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  middle_name: {
    type: Sequelize.STRING,
  },
  last_name: {
    type: Sequelize.STRING,
  },
  phone_no: {
    type: Sequelize.STRING,
  },
  gender: {
    type: Sequelize.ENUM('male', 'female', 'other'),
  },
  country: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  dob: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), // Default to current timestamp
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'), // Update on change
  },
  deletedAt: {
    type: Sequelize.DATE,
  },
},{
  paranoid:true,
  freezeTableName:true,
  modelName:"user"
})
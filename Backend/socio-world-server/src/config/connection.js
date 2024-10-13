const {Sequelize} = require('sequelize')

const env = process.env.NODE_ENV || 'development';
const config  =  require('./database')
const sequelize = new Sequelize(config[env]);

module.exports = sequelize;


const { Sequelize } = require('sequelize');

const dotenv = require('dotenv');
dotenv.config();

const sequelize = new Sequelize(process.env.DB, process.env.USER, process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: 'postgres',
  define: {
    timestamps: false
  },
  logging: false,
  // pool: {
  //   max: 5,
  //   min: 0,
  //   acquire: 30000,
  //   idle: 10000
  // }
});

const models = {};

models.Sequelize = Sequelize;
models.sequelize = sequelize;

models.entries = require('./entries')(sequelize, Sequelize);

module.exports = models;

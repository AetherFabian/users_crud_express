const {
  Sequelize,
} = require('sequelize');

const {
  host,
  username,
  password,
  database,
  dialect,
  port,
} = require('./config/config');

const sequelize = new Sequelize({
  host,
  dialect,
  username,
  password,
  database,
  port,
});

module.exports = sequelize;

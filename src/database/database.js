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
  username,
  password,
  database,
  dialect,
  port,
});

module.exports = sequelize;

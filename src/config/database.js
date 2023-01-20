const sequelize = require('../database/database');

async function connectDB() {
  try {
    await sequelize.authenticate();
    return 'Connection has been established successfully.';
  } catch (error) {
    return error;
  }
}

module.exports = connectDB;

const dotenv = require('dotenv');
// config() will read your .env file, parse the contents, assign it to process.env.
dotenv.config();

module.exports = {
  host: process.env.MYSQLDB_HOST,
  username: process.env.MYSQLDB_USER,
  password: process.env.MYSQLDB_USER_PASSWORD,
  database: process.env.MYSQLDB_DATABASE,
  dialect: 'mysql',
  port: process.env.MYSQLDB_PORT,
};

const to = require('await-to-js').default;
const UsersService = require('./users.service');

const getUsers = async (req, res, next) => {
  const [error, users] = await to(UsersService.getAllUsers());
  if (error) return next(error);
  return res.status(200).json(users);
};

module.exports = {
  getUsers,
};

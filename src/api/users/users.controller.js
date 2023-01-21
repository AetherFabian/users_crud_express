const to = require('await-to-js').default;
const UsersService = require('./users.service');

const getUsers = async (req, res, next) => {
  const [error, users] = await to(UsersService.getAllUsers());
  if (error) return next(error);
  return res.status(200).json(users);
};

const getUser = async (req, res, next) => {
  const { id } = req.params;
  const [error, user] = await to(UsersService.getUserById(id));
  if (error) return next(error);
  return res.status(200).json(user);
};

const createUser = async (req, res, next) => {
  const { body } = req;
  const [error, user] = await to(UsersService.createUser(body));
  if (error) return next(error);
  return res.status(201).json(user);
};

const updateUser = async (req, res, next) => {
  const { id } = req.params;
  const [error, user] = await to(UsersService.updateUser(id, req.body));
  if (error) return next(error);
  return res.status(200).json(user);
};

const deleteUser = async (req, res, next) => {
  const { id } = req.params;
  const [error, user] = await to(UsersService.deleteUser(id));
  if (error) return next(error);
  return res.status(202).json({
    statusCode: 202,
    message: user,
  });
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};

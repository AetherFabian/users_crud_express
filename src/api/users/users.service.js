const to = require('await-to-js').default;
const Boom = require('@hapi/boom');
const UserRepo = require('./users.repository');

async function getAllUsers() {
  const [error, users] = await to(UserRepo.findAllUsers());
  if (error) throw error;
  return users;
}

async function getUserById(id) {
  const [error, user] = await to(UserRepo.findUserById(id));
  if (!user) throw Boom.notFound('User not found');
  if (error) throw error;
  return user;
}

async function createUser(user) {
  const [error, newUser] = await to(UserRepo.createUser(user));
  if (error) throw error;
  return newUser;
}

async function updateUser(id, user) {
  const [error, updatedUser] = await to(UserRepo.updateUser(id, user));
  if (error) throw Boom.notFound('User not found');
  return updatedUser;
}

async function deleteUser(id) {
  const [error, deletedUser] = await to(UserRepo.deleteUser(id));
  if (deletedUser === 0) throw Boom.notFound('User not found');
  if (error) throw error;
  return 'User deleted';
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};

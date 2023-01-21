const to = require('await-to-js').default;
const { User } = require('../../database/models');

async function findAllUsers() {
  const [error, users] = await to(User.findAll());
  if (error) throw error;
  return users;
}

async function findUserById(id) {
  const [error, user] = await to(User.findByPk(id));
  if (error) throw error;
  return user;
}

async function createUser(user) {
  const [error, newUser] = await to(User.create(user));
  if (error) throw error;
  return newUser;
}

async function updateUser(id, user) {
  const [error] = await to(User.update(user, { where: { id } }));
  if (error) throw error;
  return user;
}

async function deleteUser(id) {
  const [error, deletedUser] = await to(User.destroy({ where: { id } }));
  if (error) throw error;
  return deletedUser;
}

module.exports = {
  findAllUsers,
  findUserById,
  createUser,
  updateUser,
  deleteUser,
};

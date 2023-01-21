const to = require('await-to-js').default;
const UserRepo = require('./users.repository');

async function getAllUsers() {
  const [error, users] = await to(UserRepo.findAllUsers());
  if (error) throw error;
  return users;
}

module.exports = {
  getAllUsers,
};

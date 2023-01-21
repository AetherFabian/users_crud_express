const to = require('await-to-js').default;
const { User } = require('../../database/models');

async function findAllUsers() {
  const [error, users] = await to(User.findAll());
  if (error) throw error;
  return users;
}

module.exports = {
  findAllUsers,
};

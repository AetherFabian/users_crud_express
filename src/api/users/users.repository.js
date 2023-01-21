const to = require('await-to-js').default;
const { user } = require('../../database/models');

async function findAllUsers() {
  const { Model } = user;
  const [error, users] = await to(Model.find({}));
  console.log('users', users);
  if (error) throw error;
  return users;
}

module.exports = {
  findAllUsers,
};

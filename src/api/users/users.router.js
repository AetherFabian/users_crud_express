const router = require('express').Router();

// importar controladores
const usersController = require('./users.controller');

// importar middlewares
const auth = require('../../middlewares/auth');
//const

router
  .get('/', auth, usersController.getUsers)
  .get('/:id', auth, usersController.getUser)
  .post('/', usersController.createUser)
  .put('/:id', auth, usersController.updateUser)
  .delete('/:id', auth, usersController.deleteUser);

module.exports = router;
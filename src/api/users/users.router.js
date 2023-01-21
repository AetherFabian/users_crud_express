const router = require('express').Router();

// importar controladores
const usersController = require('./users.controller');

// importar middlewares

router
  .get('/', usersController.getUsers)
  .get('/:id', usersController.getUser)
  .post('/', usersController.createUser)
  .put('/:id', usersController.updateUser)
  .delete('/:id', usersController.deleteUser);

module.exports = router;

const router = require('express').Router();

// importar controladores
const usersController = require('./users.controller');

// importar middlewares
const validateUser = require('../../middlewares/validators/users-validator');

router
  .get('/', usersController.getUsers)
  .get('/:id', usersController.getUser)
  .post('/', validateUser, usersController.createUser)
  .put('/:id', validateUser, usersController.updateUser)
  .delete('/:id', usersController.deleteUser);

module.exports = router;

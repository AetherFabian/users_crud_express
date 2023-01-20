const router = require('express').Router();

// importar controladores
const usersController = require('./users.controller');

// importar middlewares
const auth = require('../../middlewares/auth');
// const

router
  .get('/', usersController.getUsers);
// .get('/:id', auth, usersController.getUser())
// .post('/', auth, usersController.createUser())
// .put('/:id', auth, usersController.updateUser())
// .delete('/:id', auth, usersController.deleteUser());

module.exports = router;

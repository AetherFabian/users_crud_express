const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const routerApi = require('../api/index');
//const errorHandlers = require('../api/middlewares/errorHandlers');

module.exports = () => {
  const app = express();

  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({
    extended: false
  }));

  // usar cors para permitir acesso de otros domínios
  app.use(cors());

  // hacer log de peticions 4xx y 5xx
  app.use(morgan('dev', {
    skip: (req, res) => res.statusCode < 400
  }));

  routerApi(app);

  // log errores
  //app.use(errorHandlers);

  // el endopoint no existe
  app.use('*', (req, res) => {
    res.status(404).json({
      message: 'Enpoint not found'
    });
  });

  return app;
}
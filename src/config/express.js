const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const routerApi = require('../api/index');
const { boomErrorHandler, ormErrorHandler } = require('../middlewares/error-handlers');

module.exports = () => {
  const app = express();

  // parse application/x-www-form-urlencoded
  app.use(bodyParser.json({
    extended: false,
  }));

  // usar cors para permitir acesso de otros domínios
  app.use(cors());

  // hacer log de peticions 4xx y 5xx
  app.use(morgan('dev', {
    skip: (req, res) => res.statusCode < 400,
  }));

  routerApi(app);

  // log errores y retorno de errores
  app.use(boomErrorHandler);
  app.use(ormErrorHandler);

  // el endopoint no existe
  app.use('*', (req, res) => {
    res.status(404).json({
      statusCode: 404,
      message: 'Enpoint not found',
    });
  });

  return app;
};

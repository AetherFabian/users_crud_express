// Descripcion: Manejadores de errores personalizados
// sobre errores del ORM y errores de Boom

const { ValidationError } = require('sequelize');

function boomErrorHandler(err, _, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
}

function ormErrorHandler(err, _, res, next) {
  if (err instanceof ValidationError) {
    res.status(409).json({
      statusCode: 409,
      message: err.name,
      errors: err.errors,
    });
  }
  next(err);
}

module.exports = {
  boomErrorHandler,
  ormErrorHandler,
};

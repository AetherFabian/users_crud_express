const Joi = require('joi');

module.exports = (req, res, next) => {
  const schema = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    age: Joi.number().required(),
    birth_date: Joi.date().required(),
    civil_status: Joi.string().required(),
    phone: Joi.string().required(),
    country: Joi.string().required(),
    state: Joi.string().required(),
    city: Joi.string().required(),
    zip_code: Joi.string().required(),
    idiom: Joi.string().required(),
    hobbies: Joi.array().default(['']).optional(),
    preferences: Joi.array().default(['']).optional(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({
      statusCode: 400,
      message: error.message,
    });
  }
  return next();
};

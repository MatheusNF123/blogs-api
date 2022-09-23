const Joi = require('joi');
// const msg = "Some required fields are missing"

const validaCampo = (body) => Joi.object({
  email: Joi.string().email().required()
.messages({
  'string.empty': 'Some required fields are missing',
  'string.email': 'Invalid fields',
  'any.required': 'Invalid fields',
  }),
  password: Joi.string().required().messages({
    'string.empty': 'Some required fields are missing',
    'any.required': 'Invalid fields',
  }),
}).validate(body);

const validaCreateUser = (body) => Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
   image: Joi.string(),
}).validate(body);

module.exports = {
  validaCampo,
  validaCreateUser,
};
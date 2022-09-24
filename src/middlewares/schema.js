const Joi = require('joi');
// const msg = "Some required fields are missing"

const SomeRequired = 'Some required fields are missing';
const InvalidFields = 'Invalid fields';

const validaCampo = (body) => Joi.object({
  email: Joi.string().email().required()
.messages({
  'string.empty': SomeRequired,
  'string.email': InvalidFields,
  'any.required': InvalidFields,
  }),
  password: Joi.string().required().messages({
    'string.empty': SomeRequired,
    'any.required': InvalidFields,
  }),
}).validate(body);

const validaCreateUser = (body) => Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
   image: Joi.string(),
}).validate(body);

const validaCreateCategory = (body) => Joi.object({
  name: Joi.string().required(),
}).validate(body);

const validaCreatePost = (body) => Joi.object({
  title: Joi.string().required().messages({
    'string.empty': SomeRequired,
  }),
  content: Joi.string().required().messages({
    'string.empty': SomeRequired,
    'any.required': InvalidFields,
  }),
  categoryIds: Joi.array().required().messages({
    'array.empty': SomeRequired,
    'any.required': InvalidFields,
  }),
}).validate(body);

module.exports = {
  validaCampo,
  validaCreateUser,
  validaCreateCategory,
  validaCreatePost,
};
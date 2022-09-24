const { validaCampo, validaCreateUser,
   validaCreateCategory, validaCreatePost } = require('./schema');

const validateBody = (req, _res, next) => {
  const { email, password } = req.body;
  const { error } = validaCampo({ email, password });
console.log(error);
  if (error) {
    const err = { status: 400, message: error.message };  
   return next(err);
  }
  next();
};
const validateBodyCreatUser = (req, res, next) => {
  const { body } = req;
  const { error } = validaCreateUser({ ...body });
  if (error) {
    const err = { status: 400, message: error.message };  
   return next(err);
  }
  next();
};
const validateBodyCreateCategory = (req, res, next) => {
  const { body } = req;
  const { error } = validaCreateCategory({ ...body });
  if (error) {
    const err = { status: 400, message: error.message };  
   return next(err);
  }
  next();
};
const validateBodyCreatePost = (req, res, next) => {
  const { body } = req;
  const { error } = validaCreatePost({ ...body });
  if (error) {
    const err = { status: 400, message: error.message };  
   return next(err);
  }
  next();
};

module.exports = {
  validateBody,
  validateBodyCreatUser,
  validateBodyCreateCategory,
  validateBodyCreatePost,
};
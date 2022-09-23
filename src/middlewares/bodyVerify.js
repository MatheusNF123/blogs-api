const { validaCampo } = require('./schema');

const validateBody = (req, res, next) => {
  console.log(req.body);
  const { email, password } = req.body;
  const { error } = validaCampo({ email, password });
console.log(error);
  if (error) {
    const err = { status: 400, message: error.message };  
   return next(err);
  }
  next();
};

module.exports = {
  validateBody,
};
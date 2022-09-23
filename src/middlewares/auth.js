const { authTokenValidation } = require('../utils/JWT');

const auth = (req, res, next) => {
 const { authorization } = req.headers;
 if (!authorization) {
  const err = { status: 401, message: 'Token not found' };
  next(err);
 }

 try {
    const token = authTokenValidation(authorization);
    req.user = token;
    next();
  } catch (error) {
    console.log(error);
    const err = { status: 401, message: 'Expired or invalid token' };
    next(err);
  }
};
module.exports = {
  auth,
};
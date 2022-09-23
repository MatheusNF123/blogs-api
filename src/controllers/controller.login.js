const { serviceLogin } = require('../services');

const login = async (req, res, next) => {
  try {
    const result = await serviceLogin.login(req.body);
   return res.status(200).json({ token: result });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  login,
};
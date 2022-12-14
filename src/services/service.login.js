const { User } = require('../models');
const { generateToken } = require('../utils/JWT');

const login = async (body) => {
  const { email, password } = body;
  const result = await User.findOne({ where: { email, password } });
  if (!result) {
    const err = { status: 400, message: 'Invalid fields' };
    throw err;
  }
  const token = generateToken({ email, id: result.id });
  return token;
};

module.exports = {
  login,
};
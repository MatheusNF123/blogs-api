const { User } = require('../models');
const { generateToken } = require('../utils/JWT');

const login = async (body) => {
  const { email, password } = body;
  const result = await User.findOne({ where: { email, password } });
  console.log(result);
  if (!result) {
    const err = { status: 400, message: 'Invalid fields' };
    throw err;
  }
  const token = generateToken({ email });
  return token;
};

module.exports = {
  login,
};
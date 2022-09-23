const { User } = require('../models');
const { generateToken } = require('../utils/JWT');

const createUser = async (body) => {
  const emailUser = await User.findOne({ where: { email: body.email } });
  if (emailUser) {
    console.log('log dentro do if');
    const err = { status: 409, message: 'User already registered' };
    throw err;
  }
  console.log('fora');
  console.log({ ...body });
   await User.create({ ...body });
  const token = generateToken({ email: body.email });
  console.log(token);
  return token;
};

module.exports = {
  createUser,
};
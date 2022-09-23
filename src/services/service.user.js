const { User } = require('../models');
const { generateToken } = require('../utils/JWT');

const createUser = async (body) => {
  const emailUser = await User.findOne({ where: { email: body.email } });
  if (emailUser) {
    const err = { status: 409, message: 'User already registered' };
    throw err;
  }
   await User.create({ ...body });
  const token = generateToken({ email: body.email });
  return token;
};

const getUser = async () => {
  const emailUser = await User.findAll({ attributes: { exclude: 'password' } });

  return emailUser;
};

module.exports = {
  createUser,
  getUser,
};
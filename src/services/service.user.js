const { User } = require('../models');
const { generateToken } = require('../utils/JWT');

const createUser = async (body) => {
  const emailUser = await User.findOne({ where: { email: body.email } });
  if (emailUser) {
    const err = { status: 409, message: 'User already registered' };
    throw err;
  }
  const user = await User.create({ ...body });
  const token = generateToken({ email: body.email, id: user.id });
  return token;
};

const getUser = async () => {
  const emailUser = await User.findAll({ attributes: { exclude: 'password' } });

  return emailUser;
};

const getUserById = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: 'password' },
  });

  if (!user) {
    const err = { status: 404, message: 'User does not exist' };
    throw err;
  }
  return user;
};

const deleteUser = async (req) => {
  const { email } = req.user;
 await User.destroy({ where: { email } });
};

module.exports = {
  createUser,
  getUser,
  getUserById,
  deleteUser,
};
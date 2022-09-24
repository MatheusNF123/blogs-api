const { serviceUser } = require('../services');

const createUser = async (req, res, next) => {
  try {
    const { body } = req;
    const token = await serviceUser.createUser({ ...body });
   return res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};
const getUser = async (req, res, next) => {
  try {
    const user = await serviceUser.getUser(req.user);
   return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await serviceUser.getUserById(id);
   return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
  getUser,
  getUserById,
};
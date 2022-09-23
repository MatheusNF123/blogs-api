const { serviceUser } = require('../services');

const createUser = async (req, res, next) => {
  try {
    const { body } = req;
    const token = await serviceUser.createUser({ ...body });
   return res.status(201).json({ token });
  } catch (error) {
    console.log('uuuuuuuuuuuu');
    next(error);
  }
};

module.exports = {
  createUser,
};
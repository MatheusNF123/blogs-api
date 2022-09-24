const { serviceCategory } = require('../services');

const createCategory = async (req, res, next) => {
  try {
    const { body } = req;
    const categoryCreated = await serviceCategory.createCategory({ ...body });
   return res.status(201).json(categoryCreated);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createCategory,
};
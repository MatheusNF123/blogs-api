const { Category } = require('../models');

const createCategory = async (body) => {
  const categoryCreated = await Category.create({ ...body });
  return categoryCreated;
};

module.exports = {
  createCategory,
};
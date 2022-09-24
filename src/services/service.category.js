const { Category } = require('../models');

const createCategory = async (body) => {
  const categoryCreated = await Category.create({ ...body });
  return categoryCreated;
};
const getCategory = async () => {
  const categoryCreated = await Category.findAll();
  return categoryCreated;
};

module.exports = {
  createCategory,
  getCategory,
};
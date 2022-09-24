const { servicePost } = require('../services');

const createPost = async (req, res, next) => {
  try {
    const { body } = req;
    const postCreated = await servicePost.createPost({ ...body });
   return res.status(201).json(postCreated);
  } catch (error) {
    next(error);
  }
};
const getAll = async (_req, res, next) => {
  try {
    const posts = await servicePost.getAll();
   return res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createPost,
  getAll,
};
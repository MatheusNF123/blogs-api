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
const getPostById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = await servicePost.getPostById(id);
   return res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createPost,
  getAll,
  getPostById,
};
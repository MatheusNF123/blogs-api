const { servicePost } = require('../services');

const createPost = async (req, res, next) => {
  try {
    const { body } = req;
    const { user } = req;
    const postCreated = await servicePost.createPost({ ...body }, user);
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

const updatePostById = async (req, res, next) => {
  try {
    // const { id } = req.params;
    // const { body } = req;
    const post = await servicePost.updatePostById(req);
   return res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};
const deletePostById = async (req, res, next) => {
  try {
    await servicePost.deletePostById(req);
   return res.status(204).send();
  } catch (error) {
    next(error);
  }
};

const getPostByBySearch = async (req, res, next) => {
  try {
  const posts = await servicePost.getPostByBySearch(req);
   return res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createPost,
  getAll,
  getPostById,
  updatePostById,
  deletePostById,
  getPostByBySearch,
};
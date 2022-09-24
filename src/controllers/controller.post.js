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

module.exports = {
  createPost,
};
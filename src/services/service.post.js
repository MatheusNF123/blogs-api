const { Op } = require('sequelize');
const { BlogPost, PostCategory, Category, User } = require('../models');

const createPost = async (body, user) => {
  const allCategory = await Category.findAll();

  const allCategoryIdExist = allCategory.some((el) => body.categoryIds.includes(el.id));

  if (!allCategoryIdExist) {
    const err = { status: 400, message: '"categoryIds" not found' };
    throw err;
  }
  const post = await BlogPost.create({ ...body, userId: user.id });

  await Promise.all(body.categoryIds
    .map((id) => PostCategory.create({ postId: post.id, categoryId: id })));
 
  return post;
};
const getAll = async () => {
  const allCategory = await BlogPost.findAll(
    { include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
     ] },
     
    );
 
  return allCategory;
};
const getPostById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
     ], 
  });

  if (!post) {
    const err = { status: 404, message: 'Post does not exist' };
    throw err;
  }
 
  return post;
};
const updatePostById = async (req) => {
  const { body, user } = req;
  const { id } = req.params;
  const autorized = user.id === Number(id);
  if (!autorized) {
    const err = { status: 401, message: 'Unauthorized user' };
    throw err;
  }
  await BlogPost.update({ ...body }, { where: { id: user.id } });
  const post = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
     ], 
  });
  return post;
};
const deletePostById = async (req) => {
  const { user } = req;
  const { id } = req.params;
  const post = await BlogPost.findOne({ where: { id } });
  
  if (!post) {
    const err = { status: 404, message: 'Post does not exist' };
    throw err;
  }
  
  const autorized = user.id === post.userId;
console.log(autorized);
  if (!autorized) {
    const err = { status: 401, message: 'Unauthorized user' };
    throw err;
  }

  await BlogPost.destroy({ where: { id } });
};

const getPostByBySearch = async (req) => {
  const { q } = req.query;
  const { id } = req.user;
 const post = await BlogPost.findAll({  
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
    where: { [Op.and]: [{ userId: id },
      { [Op.or]: [{ title: { [Op.like]: `${q}%` } }, { content: { [Op.like]: `${q}%` } }] }] },
    
  });

  return post;
};

module.exports = {
  createPost,
  getAll,
  getPostById,
  updatePostById,
  deletePostById,
  getPostByBySearch,
};
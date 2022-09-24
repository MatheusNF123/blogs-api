const { BlogPost, PostCategory, Category, User } = require('../models');

const createPost = async (body) => {
  const allCategory = await Category.findAll();

  const allCategoryIdExist = allCategory.some((el) => body.categoryIds.includes(el.id));

  if (!allCategoryIdExist) {
    const err = { status: 400, message: '"categoryIds" not found' };
    throw err;
  }

  const post = await BlogPost.create({ ...body, userId: 1 });

  await Promise.all(body.categoryIds
    .map((e) => PostCategory.create({ postId: post.id, categoryId: e })));
 
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

module.exports = {
  createPost,
  getAll,
};
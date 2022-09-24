const { BlogPost, PostCategory, Category } = require('../models');

// const config = require('../config/config');

// const env = process.env.NODE_ENV || 'development';
// const sequelize = new Sequelize(config[env]);

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
// console.log(post);
 
  return post;
};

module.exports = {
  createPost,
};
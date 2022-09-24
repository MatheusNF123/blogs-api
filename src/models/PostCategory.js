module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: { 
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    categoryId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
     
  },
    {   
      timestamps: false,   
      underscored: true,
      tableName: 'posts_categories'
    });

    PostCategory.associate = (models) => {
      models.Category.belongsToMany(models.BlogPost,{
        foreignKey: 'postId',
        otherKey: 'categoryId',
        through: PostCategory,
        as: 'posts'
      })
   
   
      models.BlogPost.belongsToMany(models.Category,{
        foreignKey: 'categoryId',
        otherKey: 'postId',
        through: PostCategory,
        as: 'categories'
      })
    }
 
  return PostCategory;
};
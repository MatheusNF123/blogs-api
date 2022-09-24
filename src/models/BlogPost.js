module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: { 
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.STRING,
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },    
    published: {
      type: DataTypes.DATE,
    },    
    updated: {
      type: DataTypes.DATE,
    }    
  },
    {      
      underscored: false,
      tableName: 'blog_posts'
    });

    BlogPost.associate = (models) => {
      BlogPost.belongsTo(models.User,{
        foreignKey: 'user_id',
        as: 'user'
      })
    }
 
  return BlogPost;
};
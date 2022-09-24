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
    userId: {
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
      timestamps: true,
      createdAt: 'published',
      updatedAt: 'updated',
      underscored: true,
      tableName: 'blog_posts'
    });

    BlogPost.associate = (models) => {
      BlogPost.belongsTo(models.User,{
        foreignKey: 'userId',
        as: 'user'
      })
    }
 
  return BlogPost;
};
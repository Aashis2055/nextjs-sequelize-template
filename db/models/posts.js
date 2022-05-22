'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class posts extends Model {
    static associate(models) {
      // define association here
    }
  }
  posts.init({
    title: DataTypes.STRING,
    slug: DataTypes.STRING,
    context: DataTypes.TEXT,
    status: DataTypes.BOOLEAN,
    updatedAt: DataTypes.DATE,
    img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'posts',
  });
  return posts;
};
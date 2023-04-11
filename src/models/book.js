'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
  });

return Book;
  return book;
};
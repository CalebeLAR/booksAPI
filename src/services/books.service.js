const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();
  return books;
}

const getById = async (bookID) => {
  const response = await Book.findByPk(bookID)
  if (!response) return { type:'NOT_FOUND', message: "Book not found" }
  return { type:'NOT_FOUND', message: response };
}

module.exports = {
  getAll,
  getById
}
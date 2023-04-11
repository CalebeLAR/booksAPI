const booksService = require('../services/books.service');

const getAll = async (req, res) => {
  const response = await booksService.getAll();
  res.status(200).json(response);
}

module.exports = {
  getAll,
}
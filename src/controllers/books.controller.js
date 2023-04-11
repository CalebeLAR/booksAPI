const booksService = require('../services/books.service');

const getAll = async (req, res) => {
  const response = await booksService.getAll();
  return res.status(200).json(response);
}

const getById = async (req, res) => {
  const { id } = req.params;
  const response = await booksService.getById(id);
  if(!response.type) return res.status(404).json({message: response.message});
  return res.status(200).json(response.message);
}

module.exports = {
  getAll,
  getById,
}
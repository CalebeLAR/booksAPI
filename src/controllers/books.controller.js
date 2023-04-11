const booksService = require('../services/books.service');

const getAll = async (req, res) => {
  const response = await booksService.getAll();
  return res.status(200).json(response);
}

const getById = async (req, res) => {
  const { id } = req.params;
  const response = await booksService.getById(id);
  if(!response.type) return res.status(200).json(response.message);res.status(404).json({message: response.message});
  return res.status(404).json({message: response.message});

}

const create = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const response = await booksService.create({ title, author, pageQuantity });
  if(response.type) return res.status(404).json({message: response.message});
  return res.status(200).json(response.message);
}

const update = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;
  const response = await booksService.update(id, { title, author, pageQuantity });
  if(response.type) return res.status(404).json({message: response.message});
  return res.status(200).json({message: response.message});
}

const destroy = async (req, res) => {
  const { id } = req.params;
  const response = await booksService.destroy(id);
  if(response.type) return res.status(404).json({message: response.message});
  return res.status(200).json({message: response.message});
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  destroy,
}
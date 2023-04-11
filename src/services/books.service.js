const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();
  return books;
}

const getById = async (id) => {
  const response = await Book.findByPk(id)
  if (!response) return { type:'NOT_FOUND', message: "Book not found" }
  return { type:null, message: response };
}

const create = async ({ title, author, pageQuantity }) => {
  const response = await Book.create({ title, author, pageQuantity })
  return { type: null, message: response };
}

const update = async (id, { title, author, pageQuantity }) => {
  console.log(title, author, pageQuantity)
  const [updated] = await Book.update(
    {
      title,
      author,
      pageQuantity
    },
    { where: { id } }
  );
  if(updated !== 1) return { type:'BOOK_NOT_EXISTS', message: "Book not found" }
  return { type: null, message: "Book updated" };
}

const destroy = async (id) => {
  const destroyed = await Book.destroy({ where: { id } })
  if(destroyed !== 1) return { type:'INTERNAL_ERROR', message: "error" }
  return { type: null, message: "Book destroyed" };
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  destroy
}
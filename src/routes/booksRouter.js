const express = require('express');
const booksController = require('../controllers/books.controller');

const booksRouter = express.Router();

booksRouter.get('/', booksController.getAll);
booksRouter.get('/:id', booksController.getById);
booksRouter.post('/books', booksController.create);
booksRouter.put('/books/:id', booksController.update);
booksRouter.delete('/books/:id', booksController.destroy);

module.exports = booksRouter;
const express = require('express');

const booksRouter = express.Router();

booksRouter.get('/', (req, res) => res.status(200).json('ta dando'));

module.exports = booksRouter;
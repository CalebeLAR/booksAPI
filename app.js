const express = require('express');
const booksRouter = require('./routes/booksRouter');

const app = express();

app.use(express.json());
app.use('/', booksRouter);

module.exports = app;
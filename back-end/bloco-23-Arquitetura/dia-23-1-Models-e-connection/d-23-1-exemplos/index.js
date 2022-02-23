// index.js

const express = require('express');

const Author = require('./models/Author');
const Book = require('./models/Book');

const app = express();

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();
  return res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(author);
});

app.get('/books', async (req, res) => {
  const { author_id } = req.query;
  console.log(req.query);
  const books = (author_id)
  ? await Book.getByAuthorId(Number(author_id))
  : await Book.getAll();
  
  return res.status(200).json(books);
});

app.get('/books', async (_req, res) => {
  const books = await Book.getAll();

  return res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const book = await Book.findBookById(id);

  return res.status(200).json(book);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
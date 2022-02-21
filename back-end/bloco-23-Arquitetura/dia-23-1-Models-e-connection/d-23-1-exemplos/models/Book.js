// models/Book.js

const connection = require('./connection');

const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT id, title, author_id FROM model_example.books',
  );
  return books;
};

const getByAuthorId = async (recivedId) => {
  const [books] = await connection.execute(
    `SELECT b.id, title, a.last_name, a.first_name, a.middle_name
      FROM model_example.books AS b
      INNER JOIN model_example.authors AS a
      ON b.author_id = a.id 
      WHERE author_id = ?;`,
    [recivedId],
  );
  return books;
};

const findBookById = async (receivedId) => {
  const query = `SELECT b.id, title, a.last_name,
    a.first_name, a.middle_name
    FROM model_example.books AS b
    INNER JOIN model_example.authors AS a
    ON b.author_id = a.id 
    WHERE b.id = ?;`;
  const [bookData] = await connection.execute(query, [receivedId]);
  if (bookData.length === 0) return null;
  return bookData;
};

module.exports = {
  getAll,
  getByAuthorId,
  findBookById,
};
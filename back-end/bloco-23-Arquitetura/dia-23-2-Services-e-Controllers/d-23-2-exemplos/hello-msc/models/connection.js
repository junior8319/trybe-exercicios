// hello-msc/models/connection.js

const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'junior',
  password: 'sabresabre',
  database: 'model_example'
});

module.exports = connection;
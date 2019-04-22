const mysql = require('mysql');
require('dotenv').config({
  path: __dirname + '/../.env'
});

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE
});

db.connect();

module.exports = db;

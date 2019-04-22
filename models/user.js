const db = require('./db');

exports.get = function() {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM users;', (error, results, fields) => {
      if (error) reject(error);
      resolve(results);
    });
  });
}
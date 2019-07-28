const db = require('../database/database');

const fetchQuotes = (req, res, next) => {
  db.query(`SELECT quote, author FROM snippets`)
    .then(result => {
      res.locals.quoteInfo = result.rows;
      return next();
    })
    .catch(err => console.error(err));
};

module.exports = {
  fetchQuotes
};

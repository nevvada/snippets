const db = require('../database/database');

const fetchQuote = (req, res, next) => {
  db.query(`SELECT quote, author FROM snippets WHERE id = 1`)
    .then(result => {
      res.locals.quoteInfo = {
        quote: result.rows[0].quote,
        author: result.rows[0].author
      };
      return next();
    })
    .catch(err => console.error(err));
};

module.exports = {
  fetchQuote
};

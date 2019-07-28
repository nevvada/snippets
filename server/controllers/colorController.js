const db = require('../database/database');

const fetchColors = (req, res, next) => {
  db.query(`SELECT hex_num FROM colors`)
    .then(result => {
      res.locals.colors = [];
      for (let each of result.rows) {
        res.locals.colors.push(each.hex_num);
      }
      return next();
    })
    .catch(err => console.error(err));
};

module.exports = {
  fetchColors
};

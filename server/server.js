const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const { fetchQuotes } = require('./controllers/quoteController');
const { fetchColors } = require('./controllers/colorController');

app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/quotes', fetchQuotes, (req, res, next) => {
  return res.json(res.locals.quoteInfo);
});

app.get('/colors', fetchColors, (req, res) => {
  return res.json(res.locals.colors);
});

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../dist/index.html'))
);

const PORT = 3000;
app.listen(PORT, console.log(`Listening on ${PORT}...`));

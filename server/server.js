const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const { fetchQuote } = require('./controllers/quoteController');

app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/quote', fetchQuote, (req, res, next) => {
  return res.json(res.locals.quoteInfo);
});

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../dist/index.html'))
);

const PORT = 3000;
app.listen(PORT, console.log(`Listening on ${PORT}...`));

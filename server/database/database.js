const { Pool } = require('pg');

const db = new Pool({
  user: 'buuqrdknmuuegu',
  host: 'ec2-174-129-41-127.compute-1.amazonaws.com',
  password: '878445a36b178522c615c81693e51b795efefb294297dd3a2d3aab33b62c57c9',
  database: 'df9b4oltvd5mlq',
  port: 5432,
  ssl: true
});

db.connect((err, client, done) => {
  if (err) return console.error(err, 'Could not connect to postgres');
  console.log('Successfully connected to postgres');
});

module.exports = db;

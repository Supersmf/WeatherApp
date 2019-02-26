const express = require('express');
const getCities = require('./controllers/cities');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Autorization',
  );
  if (req.method === 'OPTIONS') {
    res.header(
      'Access-Control-Allow-Methods',
      'PUT, POST, PATCH, DELETE, GET',
    );
    return res.status(200).json({});
  }
  next();
  return null;
});

app.get('/', (req, res, next) => {
  res.send('Hello World');
  next();
});

app.get('/city', (req, res) => {
  getCities(data => res.send(data));

  // fs.readFile(`${__dirname}/db/city.json`, 'utf8', (err, data) => {
  //   if (res) {
  //     res.send(data);
  //   } else {
  //     res.send(false);
  //   }
  // });
});

module.exports = app;

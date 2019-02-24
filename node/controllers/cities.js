const fs = require('fs');

const getCities = fnc => fs.readFile(`${__dirname}/db/city.json`, 'utf8', (err, data) => fnc(data));

module.exports = getCities;

const fs = require('fs');

const getCities = fnc => fs.readFile('\\WeatherApp\\node\\db\\city.json', 'utf8', (err, data) => fnc(data));

module.exports = getCities;

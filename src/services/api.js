import { urlApi, appid } from '../config/constants';

const unitType = unit => (unit ? 'metric' : 'imperial');
const requestEnd = unit => `&appid=${appid}&units=${unitType(unitType(unit))}`;

// get single weather by city name
const getSingleData = (city, unit) => (
  fetch(`${urlApi}weather?q=${city + requestEnd(unit)}`)
    .then(response => response.json())
    .catch(e => console.log('myErr', e))
);

// get group weather by cities id
const getMultiData = (citysId, unit) => (
  fetch(`${urlApi}group?id=${citysId + requestEnd(unit)}`)
    .then(response => response.json())
);

// get forecast weather for 5 days
const getForecastData = (city, unit) => (
  fetch(`${urlApi}forecast?q=${city + requestEnd(unit)}`)
    .then(response => response.json())
);

// get weather by browser location or by Minsk
const getLocalWeather = (unit) => {
  let lon = 53.9;
  let lat = 27.56;
  navigator.geolocation.getCurrentPosition((position) => {
    lon = position.coords.longitude;
    lat = position.coords.latitude;
  });
  return fetch(`${urlApi}weather?lat=${lat}&lon=${lon}${requestEnd(unit)}`)
    .then(response => response.json());
};

export {
  getSingleData,
  getMultiData,
  getForecastData,
  getLocalWeather,
};

import { URL_API, APPID, CITY_API } from '../config/constants';

const unitType = unit => (unit ? 'metric' : 'imperial');
const requestEnd = unit => `&APPID=${APPID}&units=${unitType(unitType(unit))}`;

// eslint-disable-next-line no-console
const log = err => console.log(err);

// get single weather by city name
const getSingleData = (city, unit) => (
  fetch(`${URL_API}weather?q=${city + requestEnd(unit)}`)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      throw new Error('There is no such city');
    })
    .catch(err => log(err))
);

// get group weather by cities id
const getMultiData = (citiesId, unit) => (
  fetch(`${URL_API}group?id=${citiesId + requestEnd(unit)}`)
    .then(response => response.json())
    .catch(err => log('err ', err))
);

// get group weather id for 16 days
const getForecastData16 = (cityId, unit) => (
  fetch(`${URL_API}forecast/daily?id=${cityId + requestEnd(unit)}`)
    .then(response => response.json())
    .catch(err => log('err ', err))
);

// get forecast weather for 5 days
const getForecastData = (city, unit) => (
  fetch(`${URL_API}forecast?q=${city + requestEnd(unit)}`)
    .then(response => response.json())
    .catch(err => log('err ', err))
);

// get weather by browser location
const getWeatherByLocal = ({ latitude, longitude }, unit) => (
  fetch(`${URL_API}weather?lat=${latitude}&lon=${longitude}${requestEnd(unit)}`)
    .then(response => response.json())
    .catch(err => log('err ', err))
);

// get browser location
const getLocalWeather = unit => (
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  }).then(({ coords }) => getWeatherByLocal(coords, unit))
    .catch(err => log('err ', err))
);

const getCityDB = () => (
  fetch(CITY_API)
    .then(response => response.json())
    .catch(err => log('err ', err))
);

export {
  getSingleData,
  getMultiData,
  getForecastData,
  getForecastData16,
  getLocalWeather,
  getCityDB,
};

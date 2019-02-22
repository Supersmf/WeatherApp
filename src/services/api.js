import { URL_API, APPID, CITY_API } from '../config/constants';

const unitType = unit => (unit ? 'metric' : 'imperial');
const requestEnd = unit => `&APPID=${APPID}&units=${unitType(unitType(unit))}`;

// get single weather by city name
const getSingleData = (city, unit) => (
  fetch(`${URL_API}weather?q=${city + requestEnd(unit)}`)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      console.log('there is no such city');
    })
    // .then(response => response.json(), () => console.log('err'))
    // .catch(err => console.log('err ', err))
);

// get group weather by cities id
const getMultiData = (citysId, unit) => (
  fetch(`${URL_API}group?id=${citysId + requestEnd(unit)}`)
    .then(response => response.json())
    .catch(err => console.log('err ', err))
);

// get forecast weather for 5 days
const getForecastData = (city, unit) => (
  fetch(`${URL_API}forecast?q=${city + requestEnd(unit)}`)
    .then(response => response.json())
    .catch(err => console.log('err ', err))
);

// get weather by browser location
const getWeatherByLocal = ({ latitude, longitude }, unit) => (
  fetch(`${URL_API}weather?lat=${latitude}&lon=${longitude}${requestEnd(unit)}`)
    .then(response => response.json())
    .catch(err => console.log('err ', err))
);

// get browser location
const getLocalWeather = unit => (
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  }).then(({ coords }) => getWeatherByLocal(coords, unit))
    .catch(err => console.log('err ', err))
);

const getCityDB = () => (
  fetch(CITY_API)
    .then(response => response.json())
    .catch(err => console.log('err ', err))
);

export {
  getSingleData,
  getMultiData,
  getForecastData,
  getLocalWeather,
  getCityDB,
};

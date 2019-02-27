import {
  getSingleData, getForecastData, getLocalWeather, getCityDB, getMultiData,
} from '../services/api';
import { getMetric } from '../services/props';
import { getLocalHistory } from '../services/storage';
import convertData from '../convert/convertData';

// eslint-disable-next-line no-console
const log = err => console.log(err);

const getSearchCity = (city, fnc) => getSingleData(city, getMetric())
  .then(data => fnc(convertData(data)))
  .catch(err => log(err));

const getChartData = (city, fnc) => getForecastData(city, getMetric())
  .then((data) => { if (data) fnc(data); })
  .catch(err => log(err));

const getLocalData = fnc => getLocalWeather(getMetric())
  .then(data => fnc(convertData(data)));

const getDbData = fnc => getCityDB()
  .then((data) => {
    const strId = data.map(({ id }) => id).join(',');
    getMultiData(`${strId}`, getMetric())
      .then(cities => cities.list.forEach(city => fnc(convertData(city))));
  });

const getLocalStorage = (fnc) => {
  const data = getLocalHistory();
  if (data.length) {
    const strId = data.map(({ id }) => id).join(',');
    getMultiData(`${strId}`, getMetric())
      .then(cities => cities.list.forEach(city => fnc(convertData(city))));
  }
};

const getLocalChartData = (fnc) => {
  const cities = getLocalHistory();
  cities.forEach(city => getForecastData(city.name, getMetric())
    .then(data => fnc(data)));
};

export {
  getSearchCity,
  getChartData,
  getLocalData,
  getDbData,
  getLocalStorage,
  getLocalChartData,
};

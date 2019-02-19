import { getSingleData, getMultiData, getForecastData, getLocalWeather } from './services/api';
import { getLocalHistory, addToLocalStorage, removeFromLocalStorage } from './services/storage';
import { drawLocalWeatherPanel, drawStorageWeatherPanel, drawSearchWeatherPanel } from './renderWeatherPanel';
import { changeTemp } from './utils/dom.utils';
import { fillWeatherData, fillStoryData, drawPage } from './drawHtml';
import { drawWeatherCharts } from './drawCharts';

import './style/main.css';

const root = document.querySelector('#root');
const inputSearch = document.querySelector('.inputSearch');
const localWeather = document.querySelector('.localWeather');
const currentWeather = document.querySelector('.currentWeather');
const locationStory = document.querySelector('.locationStory');
const btnUnit = document.querySelector('.btnUnit');
const weatherChart = document.getElementById('currentWeatherChart');

let isMetric = true; // units: true - °C, false - °F

// drawPage();

window.addEventListener('load', () => {
  drawLocalWeatherPanel(localWeather);
  drawStorageWeatherPanel(locationStory);
});

function search() {
  const city = inputSearch.value;
  inputSearch.value = '';
  inputSearch.placeholder = '';

  getSingleData(city, isMetric)
    .then((data) => {
      fillWeatherData(data, currentWeather);
      if (addToLocalStorage(data)) {
        fillStoryData(data, locationStory);
      }
    })
    // eslint-disable-next-line no-return-assign
    .catch(() => (inputSearch.placeholder = 'Wrong.Type correct place.'));

  getForecastData(city, isMetric)
    .then(res => drawWeatherCharts(res, weatherChart));
}

locationStory.addEventListener('click', e => removeFromLocalStorage(e, localStorage));
inputSearch.addEventListener('change', search);
btnUnit.addEventListener('click', changeTemp);

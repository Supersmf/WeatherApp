import { getLocalWeather, getMultiData, getSingleData, getForecastData } from './services/api';
import { fillWeatherData, fillStoryData } from './drawHtml';
import { drawWeatherCharts } from './drawCharts';
import { getMetric } from './services/props';
import { getLocalHistory, addToLocalStorage } from './services/storage';
import { getInputValue } from './utils/dom.utils';

const drawLocalWeatherPanel = (element) => {
  getLocalWeather(getMetric()).then(data => fillWeatherData(data, element));
};

const drawStorageWeatherPanel = (element) => {
  if (getLocalHistory().length) {
    getMultiData(getLocalHistory().join(','), getMetric())
      .then(data => data.list.forEach(item => fillStoryData(item, element)));
  }
};

const drawSearchWeatherPanel = (inputElement, currentElement, chartElement, storeElement) => {
  const city = getInputValue(inputElement);
  const isMetric = getMetric();

  getSingleData(city, isMetric)
    .then((data) => {
      fillWeatherData(data, currentElement);
      if (addToLocalStorage(data)) {
        fillStoryData(data, storeElement);
      }
    });
  // eslint-disable-next-line no-return-assign
  // .catch(() => (inputElement.placeholder = 'Wrong.Type correct place.'));

  getForecastData(city, isMetric)
    .then(res => drawWeatherCharts(res, chartElement));
};

export {
  drawLocalWeatherPanel,
  drawStorageWeatherPanel,
  drawSearchWeatherPanel,
};

import { getLocalWeather, getMultiData, getSingleData, getForecastData } from './services/api';
import { fillWeatherData, fillStoryData } from './drawHtml';
import { drawWeatherCharts } from './components/localCharts';
import { getMetric } from './services/props';
import { getLocalHistory, addToLocalStorage } from './services/storage';
import { getInputValue } from './utils/dom.utils';
import { getDomElement } from './services/dom';

const drawLocalWeatherPanel = (element) => {
  getLocalWeather(getMetric()).then(data => fillWeatherData(data, element));
};

const drawStorageWeatherPanel = (element) => {
  if (getLocalHistory().length) {
    getMultiData(getLocalHistory().join(','), getMetric())
      .then(data => data.list.forEach(item => fillStoryData(item, element)));
  }
};

const drawSearchWeatherPanel = () => {
  const city = getInputValue(getDomElement('.inputSearch'));
  const isMetric = getMetric();

  getSingleData(city, isMetric)
    .then((data) => {
      fillWeatherData(data, getDomElement('.currentWeather'));
      if (addToLocalStorage(data)) {
        fillStoryData(data, getDomElement('.locationStory'));
      }
    });
  // eslint-disable-next-line no-return-assign
  // .catch(() => (inputElement.placeholder = 'Wrong.Type correct place.'));

  getForecastData(city, isMetric)
    .then(res => drawWeatherCharts(res, getDomElement('#currentWeatherChart')));
};

export {
  drawLocalWeatherPanel,
  drawStorageWeatherPanel,
  drawSearchWeatherPanel,
};

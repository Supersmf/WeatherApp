import { drawLocalWeatherPanel, drawStorageWeatherPanel, drawSearchWeatherPanel } from './renderWeatherPanel';
import { changeTemp } from './utils/dom.utils';
import { drawPage } from './drawHtml';
import { getDomElement } from './services/dom';

import './style/main.css';

const root = getDomElement('#root');


drawPage(root);

window.addEventListener('load', () => {
  const inputSearch = getDomElement('.inputSearch');
  const localWeather = getDomElement('.localWeather');
  const locationStory = getDomElement('.locationStory');
  const btnUnit = getDomElement('.btnUnit');

  drawLocalWeatherPanel(localWeather);
  drawStorageWeatherPanel(locationStory);
  inputSearch.addEventListener('change', drawSearchWeatherPanel);
  btnUnit.addEventListener('click', changeTemp);
});

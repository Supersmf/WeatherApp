import { creatElement } from './services/dom';

const fillWeatherData = (data, element) => {
  const container = creatElement('div', null, null, 'weatherPanel');
  creatElement('h3', container, `${data.name}, ${data.sys.country}`);
  creatElement('p', container, `Temperature: <span class="viewTemp">${data.main.temp} °C</span> `);
  creatElement('p', container, `Weather: ${data.weather[0].description}`);
  creatElement('p', container, `Pressure: ${data.main.pressure}`);

  if (element.firstChild) element.removeChild(element.firstChild);

  element.appendChild(container);
};

const fillStoryData = (data, element) => {
  const container = creatElement('div', null, null, 'storageWeatherPanel', { name: 'cityId', content: data.id });
  creatElement('p', container, `${data.name}, ${data.sys.country}  <span class="viewTemp">${data.main.temp} °C</span>`);
  creatElement('button', container, 'x', 'btnRemoveItem');

  element.appendChild(container);
};

const drawHeader = (root) => {
  creatElement('header', root);
};

const drawContent = (root) => {
  const main = creatElement('main', root, null, 'content');
  const searchForm = creatElement('div', main, null, 'searchForm');
  const section = creatElement('section', main, null, 'weatherView');
  creatElement('input', searchForm, null, 'inputSearch');
  creatElement('button', searchForm, 'Search', 'btnSearch');
  creatElement('button', searchForm, '°F', 'btnUnit');
  creatElement('article', section, null, 'localWeather');
  creatElement('article', section, null, 'currentWeather');
  creatElement('article', section, null, 'currentWeatherChart');
  creatElement('article', section, null, 'locationStory');
  creatElement('nav', main);
};

const drawFooter = (root) => {
  creatElement('footer', root, null, 'footer');
};

const drawPage = (root) => {  
  const wrapper = creatElement('div', root, null, 'wrapper');
  drawHeader(wrapper);
  drawContent(wrapper);
  drawFooter(wrapper);
};

export {
  fillWeatherData,
  fillStoryData,
  drawPage,
};

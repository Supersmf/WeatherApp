import { buildElement } from './services/dom';
import { removeFromPanel } from './utils/dom.utils';
import renderHeader from './components/header';
import renderContent from './components/content';
import renderFooter from './components/footer';


const fillWeatherData = (data, element) => {
  const container = buildElement('div', null, null, 'weatherPanel');
  buildElement('h3', container, `${data.name}, ${data.sys.country}`);
  buildElement('p', container, `Temperature: <span class="viewTemp">${data.main.temp} °C</span> `);
  buildElement('p', container, `Weather: ${data.weather[0].description}`);
  buildElement('p', container, `Pressure: ${data.main.pressure}`);

  if (element.firstChild) element.removeChild(element.firstChild);

  element.appendChild(container);
};

const fillStoryData = (data, element) => {
  const container = buildElement('div', null, null, 'storageWeatherPanel');
  buildElement('p', container, `${data.name}, ${data.sys.country}  <span class="viewTemp">${data.main.temp} °C</span>`);
  buildElement('button', container, 'x', 'btnRemoveItem', { name: 'cityId', content: data.id }, removeFromPanel);

  element.appendChild(container);
};

const drawPage = (root) => {
  const wrapper = root;

  wrapper.classList.add('wrapper');
  renderHeader(wrapper);
  renderContent(wrapper);
  renderFooter(wrapper);
};

export {
  fillWeatherData,
  fillStoryData,
  drawPage,
};

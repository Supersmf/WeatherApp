import { buildElement } from '../services/dom';
import PanelSearchWeather from './PanelSearchWeather';
import { getMetric, changeMetric } from '../services/props';

export default class Navigate {
  constructor(root, actions) {
    this.root = root;
    this.acts = actions;
  }

  template = () => `
  <div class="searchForm">
    <input class="inputSearch">
    <button class="btnSearch">Search</button>
    <button class="btnUnit">°${!getMetric() ? 'C' : 'F'}</button>
  </div>
`;

  render() {
    buildElement('nav', this.root, this.template(), 'searchForm');
    this.addEventsListener();
  }

  addEventsListener() {
    const inputSearch = this.root.querySelector('.inputSearch');
    const btnTempr = this.root.querySelector('.btnUnit');

    const search = () => {
      const currentWeather = document.querySelector('.currentWeather');
      const panelSearchWeather = new PanelSearchWeather(currentWeather);

      panelSearchWeather.render();
    };

    const calcF = celsius => Math.round((celsius * 9) / 5 + 32).toFixed(0);
    const calcC = fahrenheit => (((fahrenheit - 32) * 5) / 9).toFixed(2);

    inputSearch.addEventListener('change', search);
    btnTempr.addEventListener('click', () => { btnTempr.innerHTML = getMetric() ? '°C' : '°F'; });
    btnTempr.addEventListener('click', () => {
      document.dispatchEvent(new CustomEvent('changeUnit', { detail: { calcF, calcC } }));
      setTimeout(changeMetric, 100);
    })
  }
}

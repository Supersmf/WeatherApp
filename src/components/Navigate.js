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
    const btnSearch = this.root.querySelector('.btnSearch');
    const btnTempr = this.root.querySelector('.btnUnit');

    const search = (e) => {
      const currentWeather = document.querySelector('.currentWeather');
      const panelSearchWeather = new PanelSearchWeather(currentWeather);

      panelSearchWeather.render();
      e.target.value = '';
    };

    btnSearch.addEventListener('click', search);
    inputSearch.addEventListener('keypress', (e) => {
      if (e.keyCode === 13) {
        search(e);
      }
    });
    btnTempr.addEventListener('click', () => { btnTempr.innerHTML = getMetric() ? '°C' : '°F'; });
    btnTempr.addEventListener('click', () => {
      document.dispatchEvent(new CustomEvent('changeUnit', { detail: !getMetric() ? '°C' : '°F' }));
      changeMetric();
    });
  }
}

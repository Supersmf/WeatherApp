import { getMetric } from '../services/props';
import { buildElement } from '../services/dom';
import { getMultiData, getForecastData, getForecastData16 } from '../services/api';
import { getLocalHistory, convertData } from '../services/storage';
import PanelCitiesGroupSmall from './PanelCitiesGroup_small';

export default class PanelCitiesGroup {
  constructor(root, props) {
    this.root = root;
    this.props = props;
  }

  template = ({ name, country, temp }, unit) => `
      <div class="storageWeatherPanel">
        <p>${name}, ${country}  <span class="viewTemp">${temp} °${unit}</span></p>
      </div>
    `;

  render() {
    const storage = getLocalHistory();
    let strJSONid = storage.reduce((id, item) => `${id},${item.id}`, '');
    strJSONid = strJSONid.slice(1);

    document.addEventListener('addToLocal', ({ detail }) => this.add(detail));

    if (storage[0]) {
      getMultiData(`${strJSONid}`, getMetric())
        .then(items => items.list.forEach((item) => {
          const convItem = convertData(item);
          buildElement('div', this.root, this.add(convItem));
        }));
      storage.forEach(city => getForecastData(city.name, getMetric()).then((data) => {
        document.dispatchEvent(new CustomEvent('drawGroupCharts', { detail: data }));
      }));
      // storage.forEach(city => getForecastData16(city.id, getMetric()).then(data => console.log(data)));
    }
  }

  add = (data) => {
    const panelCitiesGroupSmall = new PanelCitiesGroupSmall(this.root);
    panelCitiesGroupSmall.render(data);
  }
}

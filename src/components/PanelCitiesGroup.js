import { buildElement } from '../services/dom';
import { getLocalStorage, getLocalChartData } from '../actions/renderData';
import PanelCitiesGroupSmall from './PanelCitiesGroupSmall';

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
    const renderTemplate = (data) => {
      buildElement('div', this.root, this.add(data));
    };
    const renderChart = data => document.dispatchEvent(new CustomEvent('drawGroupCharts', { detail: data }));

    getLocalStorage(renderTemplate);
    getLocalChartData(renderChart);
    this.addEventsListener();
  }

  addEventsListener() {
    document.addEventListener('addToLocal', ({ detail }) => this.add(detail));
  }

  add = (data) => {
    const panelCitiesGroupSmall = new PanelCitiesGroupSmall(this.root);
    panelCitiesGroupSmall.render(data);
  }
}

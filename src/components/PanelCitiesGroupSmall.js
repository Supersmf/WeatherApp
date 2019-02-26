import { getMetric, calcC, calcF } from '../services/props';
import { buildElement } from '../services/dom';

export default class PanelStorageCity {
  constructor(root, props) {
    this.root = root;
    this.props = props;
  }

  template = ({ name, country, temp }, unit) => `
        <p>${name}, ${country} ${temp} ${unit}</p>
    `;

    changeTemplate = ({ detail: unit }) => {
      let { temp } = this.data;
      if (getMetric()) {
        temp = calcF(temp);
      } else {
        temp = calcC(temp);
      }
      this.data.temp = temp;
      this.element.innerHTML = this.template(this.data, unit);
    }

    render(data) {
      this.data = data;
      this.element = buildElement('div', this.root, this.template(this.data, getMetric() ? '°C' : '°F'), 'storageWeatherPanel');
      document.addEventListener('changeUnit', fnc => this.changeTemplate(fnc));
    }
}

import { getMetric } from '../services/props';
import { buildElement } from '../services/dom';

export default class PanelStorageCity {
  constructor(root, props) {
    this.root = root;
    this.props = props;
  }

  template = ({ name, country, temp }, unit) => `
        <p>${name}, ${country}  <span class="viewTemp">${temp} °${unit}</span></p>
    `;

    changeTemplate = ({ detail: funcs }, element) => {
      let { temp } = this.data;
      if (getMetric()) {
        temp = funcs.calcF(temp);
      } else {
        temp = funcs.calcC(temp);
      }
      this.data.temp = temp;
      element.innerHTML = this.template(this.data, getMetric() ? 'C' : 'F');
    }

    render(data) {
      this.data = data;
      const element = buildElement('div', this.root, this.template(this.data, getMetric() ? 'C' : 'F'), 'storageWeatherPanel');
      document.addEventListener('changeUnit', fnc => this.changeTemplate(fnc, element));
    }
}

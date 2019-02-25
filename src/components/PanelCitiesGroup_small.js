import { getMetric, calcC, calcF } from '../services/props';
import { buildElement } from '../services/dom';

export default class PanelStorageCity {
  constructor(root, props) {
    this.root = root;
    this.props = props;
  }

  template = ({ name, country, temp, id }, unit) => `
        <p>${name}, ${country} ${temp} ${unit}</p>
        <button class="btnRemoveItem" attribute="{ name: 'cityId', content: ${id} }">x</button>
    `;

    changeTemplate = ({ detail: unit }, element) => {
      let { temp } = this.data;
      if (getMetric()) {
        temp = calcF(temp);
      } else {
        temp = calcC(temp);
      }
      this.data.temp = temp;
      // console.log(this.data);
      element.innerHTML = this.template(this.data, unit);
    }

    render(data) {
      this.data = data;
      const element = buildElement('div', this.root, this.template(this.data, getMetric() ? '°C' : '°F'), 'storageWeatherPanel');
      // const btnRemove = element.quer
      document.addEventListener('changeUnit', fnc => this.changeTemplate(fnc, element));
    }
}

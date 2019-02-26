import { getUnit, changeTemperature } from '../services/props';
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
      this.data.temp = changeTemperature(this.data.temp);
      this.element.innerHTML = this.template(this.data, unit);
    }

    render(data) {
      this.data = data;
      this.element = buildElement('div', this.root, this.template(this.data, getUnit()), 'storageWeatherPanel');
      this.addEventsListener();
    }

    addEventsListener() {
      document.addEventListener('changeUnit', fnc => this.changeTemplate(fnc));
    }
}

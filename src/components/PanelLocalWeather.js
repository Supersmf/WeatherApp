import { getLocalWeather } from '../services/api';
import { getMetric, calcC, calcF } from '../services/props';
import { buildElement } from '../services/dom';
import { convertData } from '../services/storage';

export default class PanelLocalWeather {
  constructor(root, props) {
    this.root = root;
    this.props = props;
    this.data = {};
  }

  template = ({ name, country, temp, weather, pressure }, unit) => `
        <div class="weatherPanel">
          <h3>${name}, ${country}</h3>
          <p>Temperature: <span class="viewTemp">${temp} ${unit}</span></p>
          <p>Weather: ${weather}</p>
          <p>Pressure: ${pressure}</p>
        </div>
    `;

  changeTemplate = ({ detail: unit }) => {
    let { temp } = this.data;
    if (getMetric()) {
      temp = calcF(temp);
    } else {
      temp = calcC(temp);
    }
    this.data.temp = temp;
    this.root.innerHTML = this.template(this.data, unit);
  }

  render() {
    getLocalWeather(getMetric()).then((data) => {
      this.data = convertData(data);
      buildElement(this.root, null, this.template(this.data, getMetric() ? '°C' : '°F'));
      document.addEventListener('changeUnit', this.changeTemplate);
    });
  }
}

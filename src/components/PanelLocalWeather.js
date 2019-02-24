import { getLocalWeather, getCityDB } from '../services/api';
import { getMetric, changeMetric } from '../services/props';
import { buildElement } from '../services/dom';
import { convertData } from '../services/storage';

export default class PanelLocalWeather {
  constructor(root, props) {
    this.root = root;
    this.props = props;
    this.data = {};
  }

  template = ({ name, country, temp, weather, pressure }) => `
        <div class="weatherPanel">
          <h3>${name}, ${country}</h3>
          <p>Temperature: <span class="viewTemp">${temp} °${getMetric() ? 'C' : 'F'}</span></p>
          <p>Weather: ${weather}</p>
          <p>Pressure: ${pressure}</p>
        </div>
    `;

  changeTemplate = ({ detail: funcs }) => {
    let { temp } = this.data;
    if (getMetric()) {
      temp = funcs.calcF(temp);
    } else {
      temp = funcs.calcC(temp);
    }
    this.data.temp = temp;
    this.root.innerHTML = this.template(this.data);
  }

  render() {
    getLocalWeather(getMetric()).then((data) => {
      this.data = convertData(data);
      buildElement(this.root, null, this.template(this.data));
      document.addEventListener('changeUnit', this.changeTemplate);
      // const addToGroupBtn = this.root.querySelector('.addToGroupBtn');
      // addToGroupBtn.addEventListener('click', getCityDB);
    });

    // this.props.drawLocalWeatherPanel(this.root.querySelector('.localWeather'));
    // this.props.drawStorageWeatherPanel(this.root.querySelector('.locationStory'));
    // this.addEventListener();
  }
}

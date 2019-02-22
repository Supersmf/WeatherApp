import { getLocalWeather, getCityDB } from '../services/api';
import { getMetric, changeMetric } from '../services/props';
import { buildElement } from '../services/dom';

export default class PanelLocalWeather {
  constructor(root, props) {
    this.root = root;
    this.props = props;
    this.data = {};
  }

  template = data => `
        <div class="weatherPanel">
          <h3>${data.name}, ${data.sys.country}</h3>
          <p>Temperature: <span class="viewTemp">${data.main.temp} °${getMetric() ? 'C' : 'F'}</span></p>
          <p>Weather: ${data.weather[0].description}</p>
          <p>Pressure: ${data.main.pressure}</p>
          <button class="addToGroupBtn">+</button>
        </div>
    `;

  changeTemplate = ({ detail: data }) => {
    let { temp } = this.data.main;
    changeMetric();
    if (getMetric()) {
      temp = data.calcF(temp);
    } else {
      temp = data.calcC(temp);
    }
    this.data.main.temp = temp;
    this.root.innerHTML = this.template(this.data);
  }

  render() {
    getLocalWeather(getMetric()).then((data) => {
      this.data = data;
      buildElement(this.root, null, this.template(data));
      document.addEventListener('changeUnit', this.changeTemplate);
      const addToGroupBtn = this.root.querySelector('.addToGroupBtn');
      addToGroupBtn.addEventListener('click', getCityDB);
    });

    // this.props.drawLocalWeatherPanel(this.root.querySelector('.localWeather'));
    // this.props.drawStorageWeatherPanel(this.root.querySelector('.locationStory'));
    // this.addEventListener();
  }
}

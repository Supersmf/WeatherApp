import { getSingleData, getForecastData } from '../services/api';
import { getMetric } from '../services/props';
import { buildElement } from '../services/dom';
import { addToLocalStorage } from '../services/storage';

export default class PanelSearchWeather {
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
      if (getMetric()) {
        temp = data.calcF(temp);
      } else {
        temp = data.calcC(temp);
      }
      this.data.main.temp = temp;
      this.root.innerHTML = this.template(this.data);
    }

    render() {
      const city = document.querySelector('.inputSearch').value;
      getSingleData(city, getMetric())
        .then((data) => {
          this.data = data;
          buildElement(this.root, null, this.template(data));

          getForecastData(city)
            .then(res => document.dispatchEvent(new CustomEvent('drawChart', { detail: res })));

          if (addToLocalStorage(data)) {
            document.dispatchEvent(new CustomEvent('addToLocal', { detail: data }));
          }
        });
      document.addEventListener('changeUnit', this.changeTemplate);
    }
}

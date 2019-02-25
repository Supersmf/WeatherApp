import { getSingleData, getForecastData } from '../services/api';
import { getMetric, calcC, calcF } from '../services/props';
import { buildElement } from '../services/dom';
import { addToLocalStorage, convertData } from '../services/storage';

export default class PanelSearchWeather {
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
          <button class="addToGroupBtn">+</button>
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
      const city = document.querySelector('.inputSearch').value;
      const addToGroupBtn = document.querySelector('.addToGroupBtn');

      const addToLocal = () => {
        if (addToLocalStorage(this.data)) {
          document.dispatchEvent(new CustomEvent('addToLocal', { detail: this.data }));
        }
      };

      getSingleData(city, getMetric())
        .then((data) => {
          this.data = convertData(data);
          buildElement(this.root, null, this.template(this.data, getMetric() ? '°C' : '°F'), null, null, addToLocal);

          getForecastData(city)
            .then(res => document.dispatchEvent(new CustomEvent('drawChart', { detail: res })));
        });

      // addToGroupBtn.addEventListener('click', () => {
      //   console.log('click group btn');
      //   // if (addToLocalStorage(this.data)) {
      //   //   document.dispatchEvent(new CustomEvent('addToLocal', this.data));
      //   // }
      // })

      document.addEventListener('changeUnit', this.changeTemplate);
    }
}

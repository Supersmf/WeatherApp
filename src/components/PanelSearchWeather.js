import { changeTemperature, getUnit } from '../services/props';
import { buildElement } from '../services/dom';
import { addToLocalStorage } from '../services/storage';
import { getSearchCity, getChartData } from '../actions/renderData';

export default class PanelSearchWeather {
  constructor(root, props) {
    this.root = root;
    this.props = props;
  }

  template = ({
    name, country, temp, weather, pressure,
  }, unit) => `
        <div class="weatherPanel">
          <h3>${name}, ${country}</h3>
          <p>Temperature: <span class="viewTemp">${temp} ${unit}</span></p>
          <p>Weather: ${weather}</p>
          <p>Pressure: ${pressure}</p>
          <button class="addToGroupBtn">+</button>
        </div>
    `;

    changeTemplate = ({ detail: unit }) => {
      this.data.temp = changeTemperature(this.data.temp);
      this.root.innerHTML = this.template(this.data, unit);
    }

    render() {
      const city = document.querySelector('.inputSearch').value;
      const addToLocal = () => {
        if (addToLocalStorage(this.data)) {
          document.dispatchEvent(new CustomEvent('addToLocal', { detail: this.data }));
        }
      };
      const renderTemplate = (data) => {
        this.data = data;
        buildElement(this.root, null, this.template(this.data, getUnit()), null, null, addToLocal);
      };
      const renderChart = data => document.dispatchEvent(new CustomEvent('drawChart', { detail: data }));

      getSearchCity(city, renderTemplate);
      getChartData(city, renderChart);

      this.addEventsListener();
    }

    addEventsListener() {
      document.addEventListener('changeUnit', this.changeTemplate);
    }
}

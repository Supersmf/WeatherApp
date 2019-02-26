import { changeTemperature, getUnit } from '../services/props';
import { buildElement } from '../services/dom';
import { getLocalData } from '../actions/renderData';

export default class PanelLocalWeather {
  constructor(root, props) {
    this.root = root;
    this.props = props;
    this.data = {};
  }

  template = ({
    name, country, temp, weather, pressure,
  }, unit) => `
        <div class="weatherPanel">
          <h3>${name}, ${country}</h3>
          <p>Temperature: <span class="viewTemp">${temp} ${unit}</span></p>
          <p>Weather: ${weather}</p>
          <p>Pressure: ${pressure}</p>
        </div>
    `;

    changeTemplate = ({ detail: unit }) => {
      this.data.temp = changeTemperature(this.data.temp);
      this.root.innerHTML = this.template(this.data, unit);
    }

    render() {
      const renderTemplate = (data) => {
        this.data = data;
        buildElement(this.root, null, this.template(this.data, getUnit()));
        document.addEventListener('changeUnit', this.changeTemplate);
      };

      getLocalData(renderTemplate);
    }
}

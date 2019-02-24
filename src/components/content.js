import { buildElement } from '../services/dom';
import PanelLocalWeather from './PanelLocalWeather';
import PanelStorageCity from './PanelStorageCity';
import PanelCityChart from './PanelCityChart';
import PanelCitiesGroup from './PanelCitiesGroup';

export default class Content {
  constructor(root, props) {
    this.root = root;
    this.props = props;
  }

  template = () => `
        <section class="weatherView">
          <article class="localWeather"></article>
          <article class="currentWeather"></article>
          <article class="currentWeatherChart">
            <div id="currentWeatherChart" class="cityChart"></div>
          </article>
          <article class="locationStory"></article>
        </section>
        <section class="groupWeatherView">
          <article class="groupWeatherContainer"></article>
          <article class="groupChartContainer">
            <canvas id="groupWeatherChart" class="groupWeatherChart"></canvas>
            <canvas id="groupWeatherMap" class="groupWeatherMap"></canvas>
          </article>
        </section>
    `;

  render() {
    const main = buildElement('main', this.root, this.template(), 'content');
    
    const localWeather = main.querySelector('.localWeather');
    const locationStorage = main.querySelector('.locationStory');
    const cityChart = main.querySelector('.cityChart');
    const groupWeatherContainer = main.querySelector('.groupWeatherContainer');

    const panelLocalWeather = new PanelLocalWeather(localWeather);
    const panelStorageCity = new PanelStorageCity(locationStorage);
    const panelCityChart = new PanelCityChart(cityChart);
    const panelCitiesGroup = new PanelCitiesGroup(groupWeatherContainer);

    panelLocalWeather.render();
    panelStorageCity.render();
    panelCityChart.render();
    panelCitiesGroup.render();

  }

  addEventListener() {
    const element = this.root.querySelector('.groupWeatherView');
  }
}

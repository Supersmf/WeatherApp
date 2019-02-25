import { buildElement } from '../services/dom';
import PanelLocalWeather from './PanelLocalWeather';
import PanelStorageCity from './PanelStorageCity';
import PanelCityChart from './PanelCityChart';
import PanelCitiesGroup from './PanelCitiesGroup';
import PanelCitiesCharts from './PanelCitiesCharts';

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
            <div id="groupWeatherChart" class="groupWeatherChart"></div>
            <div id="groupWeatherMap" class="groupWeatherMap"></div>
          </article>
        </section>
    `;

  render() {
    const main = buildElement('main', this.root, this.template(), 'content');

    const localWeather = main.querySelector('.localWeather');
    const locationStorage = main.querySelector('.locationStory');
    const cityChart = main.querySelector('.cityChart');
    const groupWeatherContainer = main.querySelector('.groupWeatherContainer');
    const groupWeatherChart = main.querySelector('.groupWeatherChart');

    const panelLocalWeather = new PanelLocalWeather(localWeather);
    const panelStorageCity = new PanelStorageCity(locationStorage);
    const panelCityChart = new PanelCityChart(cityChart);
    const panelCitiesGroup = new PanelCitiesGroup(groupWeatherContainer);
    const panelCitiesCharts = new PanelCitiesCharts(groupWeatherChart);

    panelLocalWeather.render();
    panelStorageCity.render();
    panelCityChart.render();
    panelCitiesGroup.render();
    panelCitiesCharts.render();
  }

  addEventListener() {
    const element = this.root.querySelector('.groupWeatherView');
  }
}

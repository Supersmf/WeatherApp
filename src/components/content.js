import { buildElement } from '../services/dom';

export default function renderContent(root) {
  const innerHtml = `
    <div class="searchForm">
      <input class="inputSearch">
      <button class="btnSearch">Search</button>
      <button class="btnUnit">°F</button>
    </div>
    <nav></nav>
    <section class="weatherView">
      <article class="localWeather"></article>
      <article class="currentWeather"></article>
      <article class="currentWeatherChart">
        <canvas id="currentWeatherChart" class="drawCharts"></canvas>
      </article>
      <article class="locationStory"></article>
    </section>
  `;

  buildElement('main', root, innerHtml, 'content');
}

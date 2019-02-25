import Highcharts from 'highcharts';
import { getMetric, calcC, calcF } from '../services/props';
import { getForecastData } from '../services/api';

export default class PanelCitiesCharts {
  constructor(root, props) {
    this.root = root;
    this.props = props;
    this.data = [];
    this.time = [];
  }

  fillData({ city, list }) {
    const times = [];
    const temp = [];
      
    // list.splice(0, 20);
    list.forEach((item) => {
      const time = item.dt_txt.split(' ')[1].slice(0, -3);
      times.push(time);
      temp.push(item.main.temp);
    });
    this.data.push({ name: city.name, data: temp });
    this.time = times;
  }

  render() {
    document.addEventListener('drawGroupCharts', ({ detail }) => {
      this.fillData(detail);
      this.add(getMetric() ? '°C' : '°F');
    });
    document.addEventListener('addToLocal', ({ detail }) => {
      getForecastData(detail.name, getMetric()).then((data) => {
        this.fillData(data);
        this.add(getMetric() ? '°C' : '°F');
      });
      
    });
    document.addEventListener('changeUnit', ({ detail: unit }) => {
      const fnc = getMetric() ? calcF : calcC;
      this.data.forEach((item) => { item.data = item.data.map(e => +fnc(e)); });
      this.add(unit);
    });
  }

  add(unit) {
    Highcharts.chart(this.root, {
      chart: {
        type: 'line',
      },
      credits: {
        enabled: false,
      },
      title: {
        text: 'Daily temperature change',
      },
      subtitle: {
        text: 'Source: WorldClimate.com',
      },
      xAxis: [{
        categories: this.time,
      }, {
        linkedTo: 0,
        tickPositions: [1.5, 9.5, 17.5, 25.5, 33.5],
        labels: {
          format: '{value:<span style="font-size: 12px; font-weight: bold">%a</span> %b %e}',
          align: 'right',
          x: -15,
          // y: -5,
        },
        // opposite: true,
        tickLength: 20,
        gridLineWidth: 1,
      }],
      yAxis: {
        title: {
          text: `Temperature (${unit})`,
        },
      },
      plotOptions: {
        line: {
          dataLabels: {
            enabled: true,
            format: '{point.y:.0f}',
          },
          enableMouseTracking: false,
        },
      },
      series: this.data,
    });
  }
}

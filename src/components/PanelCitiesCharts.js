import Highcharts from 'highcharts';
import moment from 'moment/src/moment';
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

    list.forEach((item) => {
      console.log(moment(item.dt));
      const time = item.dt_txt.slice(5, -3).replace('-', '.');
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
      this.data.forEach((item, index) => {
        this.data[index].data = item.data.map(e => +fnc(e));
      });
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
      xAxis: {
        categories: this.time,
        labels: {
          formatter() {
            const temp = this.value.split(' ');
            return `<p style="font-size: 9px;">
                      ${temp[1]}<br>
                      <span style="font-size: 9px; font-weight: bold">
                        ${temp[0]}
                      </span>
                    </p>`;
          },
          align: 'right',
          x: -5,
          rotation: 0,
        },
      },
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

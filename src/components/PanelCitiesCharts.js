import Highcharts from 'highcharts';
import * as moment from 'moment';
import { getMetric, getUnit, changeTemperature } from '../services/props';
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
      const t = moment.unix(item.dt);
      const month = t.format('MMMM').slice(0, 3);
      const day = t.format('D');
      const hour = t.format('H');
      times.push(`${day}${month}. ${hour}h`);
      temp.push(item.main.temp);
    });
    this.data.push({ name: city.name, data: temp });
    this.time = times;
  }

  render() {
    document.addEventListener('drawGroupCharts', ({ detail }) => {
      this.fillData(detail);
      this.add(getUnit());
    });
    document.addEventListener('addToLocal', ({ detail }) => {
      getForecastData(detail.name, getMetric()).then((data) => {
        this.fillData(data);
        this.add(getUnit());
      });
    });
    document.addEventListener('changeUnit', ({ detail: unit }) => {
      this.data.forEach((item, index) => {
        this.data[index].data = item.data.map(e => changeTemperature(e));
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
                        ${temp[1] === '0h' ? temp[0] : ''}
                      </span>
                    </p>`;
          },
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

import Highcharts from 'highcharts';
import { getUnit, changeTemperature } from '../services/props';

export default class PanelCityChart {
  constructor(root, props) {
    this.root = root;
    this.props = props;
    this.city = '';
  }

  static fillData({ list }) {
    const res = {
      time: [],
      tempMin: [],
      tempMax: [],
      wind: [],
    };
    list.splice(10);
    list.forEach((el) => {
      res.time.push(el.dt_txt.split(' ')[1].slice(0, -3));
      res.tempMin.push(el.main.temp_min);
      res.tempMax.push(el.main.temp_max);
      res.wind.push(el.wind.speed);
    });
    return res;
  }

  render() {
    document.addEventListener('drawChart', ({ detail }) => {
      this.city = detail.city;
      this.data = PanelCityChart.fillData(detail);
      this.add(getUnit());
    });
    document.addEventListener('changeUnit', ({ detail: unit }) => {
      if (this.data) {
        this.data.tempMin = this.data.tempMin.map(item => changeTemperature(item));
        this.data.tempMax = this.data.tempMax.map(item => changeTemperature(item));
        this.add(unit);
      }
    });
  }

  add(unit) {
    Highcharts.chart(this.root, {
      chart: {
        zoomType: 'xy',
      },
      title: {
        text: `Average Weather Data for ${this.city}`,
      },
      xAxis: [{
        categories: this.data.time,
        crosshair: true,
      }],
      yAxis: [{ // Primary yAxis
        labels: {
          format: `{value} ${unit}`,
          style: {
            color: Highcharts.getOptions().colors[0],
          },
        },
        title: {
          text: 'Temperature',
          style: {
            color: Highcharts.getOptions().colors[0],
          },
        },
        opposite: true,

      }, { // Secondary yAxis
        gridLineWidth: 0,
        title: {
          text: 'Wind',
          style: {
            color: Highcharts.getOptions().colors[2],
          },
        },
        labels: {
          format: '{value} m/s',
          style: {
            color: Highcharts.getOptions().colors[2],
          },
        },

      }],
      tooltip: {
        shared: true,
      },
      legend: {
        layout: 'vertical',
        align: 'left',
        x: 80,
        verticalAlign: 'top',
        y: 15,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || 'rgba(255,255,255,0.25)',
      },
      series: [{
        name: 'min temperature',
        type: 'column',
        data: this.data.tempMin,
        tooltip: {
          valueSuffix: ` ${unit}`,
        },
      },
      {
        name: 'max temperature',
        type: 'column',
        data: this.data.tempMax,
        tooltip: {
          valueSuffix: ` ${unit}`,
        },
      }, {
        name: 'wind',
        type: 'spline',
        yAxis: 1,
        data: this.data.wind,
        tooltip: {
          valueSuffix: ' m/s',
        },

      }],
    });
  }
}

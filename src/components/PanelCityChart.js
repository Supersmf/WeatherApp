import Chart from 'chart.js';

export default class PanelCityChart {
  constructor(root, props) {
    this.root = root;
    this.props = props;
  }

  template = data => `
        <div class="weatherPanel">
          <h3>${data.name}, ${data.sys.country}</h3>
          <p>Temperature: <span class="viewTemp">${data.main.temp} °C</span></p>
          <p>Weather: ${data.weather[0].description}</p>
          <p>Pressure: ${data.main.pressure}</p>
          <button class="addToGroupBtn">+</button>
        </div>
    `;

  static fillData({ list }) {
    const res = {
      time: [],
      tempMin: [],
      tempMax: [],
      wind: [],
    };
    list.splice(10);
    list.forEach((el) => {
      const time = el.dt_txt.split(' ')[1].slice(0, -3);
      res.time.push(time);
      res.tempMin.push(el.main.temp_min);
      res.tempMax.push(el.main.temp_max);
      res.wind.push(el.wind.speed);
    });
    return res;
  }

  render() {
    document.addEventListener('drawChart', data => PanelCityChart.add(data, this.root));
  }

  static add({ detail: data }, root) {
    const info = PanelCityChart.fillData(data);
    const myChart = new Chart(root, {
      type: 'bar',
      data: {
        labels: info.time,
        datasets: [{
          label: 'min temp',
          backgroundColor: '#8e5ea2',
          data: info.tempMin,
        }, {
          label: 'max temp',
          backgroundColor: '#3e95cd',
          data: info.tempMax,
        }, {
          label: 'wind speed',
          type: 'line',
          backgroundColor: '#3ecdba',
          borderColor: '#3ecdba',
          data: info.wind,
          fill: false,
        }],
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
            },
          }],
        },
      },
    });
  }
}

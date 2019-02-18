import Chart from 'chart.js';

function fillData({ list }) {
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

const drawWeatherCharts = (data, ctx) => {
  const info = fillData(data);
  const myChart = new Chart(ctx, {
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
        borderColor: '#813ecd',
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
};

export {
  drawWeatherCharts,
};
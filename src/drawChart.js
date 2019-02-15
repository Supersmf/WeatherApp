import { GoogleCharts } from "google-charts";

let element;
let info;

let drawWeatherChart = (res, elem) => {
  element = elem;
  info = res;

  if(info.cod == 200){
      GoogleCharts.load(drawCharts);
  }
};


function drawCharts() {
  let data = fillData(info).slice(0, 10);
  data = data = google.visualization.arrayToDataTable(data);

  let options = {
    title: `Weather change in ${info.city.name}, ${info.city.country}`,
    vAxis: { title: "Temperature" },
    hAxis: { title: "Time" },
    seriesType: "bars",
    series: { 3: { type: "line" } }
  };

  const col_1_chart = new GoogleCharts.api.visualization.ComboChart(element);
  col_1_chart.draw(data, options);
};


function fillData({ list }) {
  let res = [["Time", "min", "average", "max", "wind"]];
  list.forEach(el => {
    let time = el.dt_txt.split(" ")[1].slice(0, -3);
    res.push([time, el.main.temp_min, el.main.temp, el.main.temp_max, el.wind.speed]);
  });
  return res;
};

export { 
    drawWeatherChart 
};

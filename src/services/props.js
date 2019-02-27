// units: true - °C, false - °F.3
let isMetric = true;

const getMetric = () => isMetric;

const getUnit = () => (isMetric ? '°C' : '°F');

const changeMetric = () => {
  isMetric = !isMetric;
};

const calcF = celsius => Math.round((celsius * 9) / 5 + 32).toFixed(0);
const calcC = fahrenheit => (((fahrenheit - 32) * 5) / 9).toFixed(2);

const changeTemperature = temperature => +(isMetric ? calcF(temperature) : calcC(temperature));

export {
  getMetric,
  changeMetric,
  calcF,
  calcC,
  changeTemperature,
  getUnit,
};

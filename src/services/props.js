// units: true - °C, false - °F
let isMetric = true;

const getMetric = () => isMetric;

const changeMetric = () => {
  isMetric = !isMetric;
};

const calcF = celsius => Math.round((celsius * 9) / 5 + 32).toFixed(0);

const calcC = fahrenheit => (((fahrenheit - 32) * 5) / 9).toFixed(2);

export {
  getMetric,
  changeMetric,
  calcF,
  calcC,
};

// units: true - °C, false - °F
let isMetric = true;

const getMetric = () => isMetric;

const changeMetric = () => {
  isMetric = !isMetric;
};

export {
  getMetric,
  changeMetric,
};

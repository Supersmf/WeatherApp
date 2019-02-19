import { getMetric, changeMetric } from '../services/props';

const changeTemp = (event) => {
  const temp = document.querySelectorAll('.viewTemp');
  const tempBtn = event.target;
  const isMetric = getMetric();

  const calcF = celsius => Math.round((celsius * 9) / 5 + 32).toFixed(0);
  const calcC = fahrenheit => (((fahrenheit - 32) * 5) / 9).toFixed(2);

  changeMetric();
  tempBtn.innerHTML = isMetric ? ' °C' : ' °F';

  temp.forEach((e) => {
    let currTemp = parseFloat(e.textContent);

    if (isMetric) {
      currTemp = `${calcF(currTemp)} °F`;
    } else {
      currTemp = `${calcC(currTemp)} °C`;
    }
    e.textContent = currTemp;
  });
};

const getInputValue = (element) => {
  const text = element.value;
  element.value = '';
  element.placeholder = '';

  return text;
};

// const root = document.querySelector('#root');
// const inputSearch = document.querySelector('.inputSearch');
// const localWeather = document.querySelector('.localWeather');
// const currentWeather = document.querySelector('.currentWeather');
// const locationStory = document.querySelector('.locationStory');
// const btnUnit = document.querySelector('.btnUnit');
// const weatherChart = document.getElementById('currentWeatherChart');

export {
  changeTemp,
  getInputValue,
};

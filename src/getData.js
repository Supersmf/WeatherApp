const url = 'https://samples.openweathermap.org/data/2.5/weather?q=London&appid=b6907d289e10d714a6e88b30761fae22';
const corst = 'https://cors.io/?';

export default function getData() {
  return fetch(corst + url)
  .then((response) => response.json())
};
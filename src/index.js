import getData from './getData';
import { fillWeatherData } from './addData';
import './style/style.scss';

const buttonSearch = document.querySelector('.btnSearch');
const inputSearch = document.querySelector('.inputSearch');
const localWeather = document.querySelector('.localWeather');
const currentWeather = document.querySelector('.currentWeather');

const url = 'http://api.openweathermap.org/data/2.5/weather?';
const ipUrl = "https://ipinfo.io/json";
const corst = 'https://cors.io/?';
const appid = '361769565b95b84393f71027df69289e';

window.addEventListener('load', () => {

    fetch(corst + ipUrl).then((response) => response.json())
        .then(({city}) => getData(corst + url, appid, city))
        .then(data => fillWeatherData(data, localWeather));
})


buttonSearch.addEventListener('click', (e) => {
    let city = inputSearch.value;
    inputSearch.value = '';
    getData(corst + url, appid, city)
        .then(data => fillWeatherData(data, currentWeather));;
})

import getData from './getData';
import { fillWeatherData } from './addData';
// import './style/style.scss';
import './style/main.css';

const buttonSearch = document.querySelector('.btnSearch');
const inputSearch = document.querySelector('.inputSearch');
const localWeather = document.querySelector('.localWeather');
const currentWeather = document.querySelector('.currentWeather');
const tempType = document.querySelector('.tempType');

const url = 'http://api.openweathermap.org/data/2.5/weather?';
const ipUrl = "https://ipinfo.io/json";
const corst = 'https://cors.io/?';
const appid = '361769565b95b84393f71027df69289e';

let unit = true;

window.addEventListener('load', () => {
    fetch(corst + ipUrl).then((response) => response.json())
        .then(({city}) => getData(corst + url, appid, city))
        .then(data => fillWeatherData(data, localWeather));
})


buttonSearch.addEventListener('click', (e) => {
    let city = inputSearch.value;
    inputSearch.value = '';
    getData(corst + url, appid, city)
        .then(data => fillWeatherData(data, currentWeather, unit));;
})

tempType.addEventListener('change', () => {
    let temp = document.querySelectorAll('.viewTemp');
    temp.forEach(e => {
        let t = parseFloat(e.textContent.split(' ')[1]);
        if(unit){
            t = (Math.round(t * 9/5 + 32)).toFixed(0) + '°F';
        }else{
            t = ((t - 32) * 5/9).toFixed(2) + '°C';
        }
        unit = !unit;
        e.textContent = `Temperature: ${t}`;
    })
    
});
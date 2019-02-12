import getData from './getData';
import getLocation from './getLocation';
import './style/style.scss';

const buttonSearch = document.querySelector('.btnSearch');
const inputSearch = document.querySelector('.inputSearch');

const url = 'https://samples.openweathermap.org/data/2.5/weather?';
const corst = 'https://cors.io/?';
const appid = '361769565b95b84393f71027df69289e';

window.addEventListener('load', () => {
    getLocation(corst + url, appid);
})


/* buttonSearch.addEventListener('click', (e) => {
    let input = inputSearch.value;
    getData().then(res => console.log(res));;
}) */

import getData from './getData';
import './style/style.scss';

const buttonSearch = document.querySelector('.btnSearch');
const inputSearch = document.querySelector('.inputSearch');

buttonSearch.addEventListener('click', (e) => {
    let input = inputSearch.value;
    getData().then(res => console.log(res));;
})
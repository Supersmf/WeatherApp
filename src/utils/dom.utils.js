// import { getMetric, changeMetric } from '../services/props';
import { removeFromLocalStorage } from '../services/storage';

// const changeTemp = (event) => {
//   const temp = document.querySelectorAll('.viewTemp');
//   const tempBtn = event.target;
//   const isMetric = getMetric();

//   const calcF = celsius => Math.round((celsius * 9) / 5 + 32).toFixed(0);
//   const calcC = fahrenheit => (((fahrenheit - 32) * 5) / 9).toFixed(2);

//   changeMetric();
//   tempBtn.innerHTML = isMetric ? ' °C' : ' °F';

//   temp.forEach((e) => {
//     let currTemp = parseFloat(e.textContent);

//     if (isMetric) {
//       currTemp = `${calcF(currTemp)} °F`;
//     } else {
//       currTemp = `${calcC(currTemp)} °C`;
//     }
//     e.textContent = currTemp;
//   });
// };

// const getInputValue = (element) => {
//   const text = element.value;
//   const el = element;
//   el.value = '';
//   el.placeholder = '';

//   return text;
// };

const removeFromPanel = ({ target }) => {
  const btnAttr = target.getAttribute('cityID');
  const parentElem = target.parentElement;

  removeFromLocalStorage(+btnAttr);
  parentElem.parentElement.removeChild(parentElem);
};

const addToGroup = ({ target }) => {
  // const element = target.parentElement.cloneNode(true);
  console.log('add');

};

export {
  changeTemp,
  getInputValue,
  removeFromPanel,
  addToGroup,
};

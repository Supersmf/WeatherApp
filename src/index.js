import { getSingleData, getMultiData } from "./getData";
import { fillWeatherData, fillStoryData } from "./addData";
import "./style/main.css";

const buttonSearch = document.querySelector(".btnSearch");
const inputSearch = document.querySelector(".inputSearch");
const localWeather = document.querySelector(".localWeather");
const currentWeather = document.querySelector(".currentWeather");
const locationStory = document.querySelector(".locationStory");
const tempType = document.querySelector(".tempType");

const urlWeather = "http://api.openweathermap.org/data/2.5/weather?";
const urlGroup = "http://api.openweathermap.org/data/2.5/group?";
const ipUrl = "https://ipinfo.io/json";
const corst = "https://cors.io/?";
const appid = "361769565b95b84393f71027df69289e";

let storage = "";
let unit = true; // units: true - °C, false - °F

window.addEventListener("load", () => {
  storage = localStorage.getItem("city") || "";
  storage = storage.replace(/[\"\\]/gi, "");

  fetch(corst + ipUrl)
    .then(response => response.json())
    .then(({ city }) => getSingleData(corst + urlWeather, appid, city, unit))
    .then(data => fillWeatherData(data, localWeather));

  getMultiData(corst + urlGroup, appid, storage, unit)
    .then(data => data.list.forEach(item => fillStoryData(item, locationStory))
  );
});

buttonSearch.addEventListener("click", search);
inputSearch.addEventListener("change", search);

tempType.addEventListener("change", () => {
  let temp = document.querySelectorAll(".viewTemp");

  temp.forEach(e => {
    let t = parseFloat(e.textContent);

    unit ?
      t = Math.round((t * 9) / 5 + 32).toFixed(0) + " °F" :
      t = (((t - 32) * 5) / 9).toFixed(2) + " °C";

    e.textContent = t;
  });

  unit = !unit;
});

function search(e) {
  let city = inputSearch.value;
  inputSearch.value = "";

  getSingleData(corst + urlWeather, appid, city, unit).then(data => {
    fillWeatherData(data, currentWeather);

    if (!~storage.indexOf(data.id)) {
      storage[0] ? (storage += ",") : "";
      storage += `${data.id}`;
    }

    localStorage.setItem("city", JSON.stringify(storage));
  });
}
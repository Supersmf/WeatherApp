import { getSingleData, getMultiData, getForecastData } from "./getData";
import { fillWeatherData, fillStoryData } from "./addData";
import { drawWeatherChart } from "./drawChart";

import "./style/main.css";

const buttonSearch = document.querySelector(".btnSearch");
const inputSearch = document.querySelector(".inputSearch");
const localWeather = document.querySelector(".localWeather");
const currentWeather = document.querySelector(".currentWeather");
const locationStory = document.querySelector(".locationStory");
const btnUnit = document.querySelector(".btnUnit");
const currentWeatherChart = document.querySelector(".currentWeatherChart");

const urlWeather = "http://api.openweathermap.org/data/2.5/";
const ipUrl = "https://ipinfo.io/json";
const corst = "https://cors.io/?";
const appid = "361769565b95b84393f71027df69289e";

let storage = "";
let unit = true; // units: true - °C, false - °F

window.addEventListener("load", () => {
  storage = localStorage.getItem("city") || "";

  fetch(corst + ipUrl)
    .then(response => response.json())
    .then(({ city }) => getSingleData(corst + urlWeather, appid, city, unit))
    .then(data => fillWeatherData(data, localWeather));

  getMultiData(corst + urlWeather, appid, storage, unit).then(data =>
    data.list.forEach(item => fillStoryData(item, locationStory))
  );
});

// buttonSearch.addEventListener("click", search);
inputSearch.addEventListener("change", search);

btnUnit.addEventListener("click", () => {
  let temp = document.querySelectorAll(".viewTemp");

  temp.forEach(e => {
    let t = parseFloat(e.textContent);

    if (unit) {
      t = Math.round((t * 9) / 5 + 32).toFixed(0) + " °F";
      btnUnit.innerHTML = " °C";
    } else {
      t = (((t - 32) * 5) / 9).toFixed(2) + " °C";
      btnUnit.innerHTML = " °F";
    }
    e.textContent = t;
  });
  unit = !unit;
});

function search(e) {
  let city = inputSearch.value;
  inputSearch.value = "";
  inputSearch.placeholder = "";

  getSingleData(corst + urlWeather, appid, city, unit)
    .then(data => {
      fillWeatherData(data, currentWeather);
      if (!~storage.indexOf(data.id)) {
        storage[0] ? (storage += ",") : "";
        storage += `${data.id}`;
        fillStoryData(data, locationStory);
      }
      localStorage.setItem("city", storage);
    })
    .catch(e => (inputSearch.placeholder = "Wrong.Type correct place."));

  getForecastData(corst + urlWeather, appid, city, unit).then(res =>
    drawWeatherChart(res, currentWeatherChart)
  );
}

locationStory.addEventListener("click", e => {
  if (e.target.tagName == "BUTTON") {
    const element = e.target.parentElement;
    const attrib = element.getAttribute("cityID");

    storage = storage.split(",").filter(e => e != attrib);
    storage = storage.join(",");
    localStorage.setItem("city", storage);
    locationStory.removeChild(e.target.parentElement);
  }
});

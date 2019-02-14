let fillWeatherData = (data, element) => {

    let container = document.createElement('div');
    let location = document.createElement('h3');
    let temp = document.createElement('p');
    let weather = document.createElement('p');
    let pressure = document.createElement('p');
    let addToStorage = document.createElement('button');

    location.innerHTML = `${data.name}, ${data.sys.country}`;
    temp.innerHTML = `Temperature: <span class="viewTemp">${data.main.temp} °C</span> `;
    weather.innerHTML = `Weather: ${data.weather[0].description}`;
    pressure.innerHTML = `Pressure: ${data.main.pressure}`;

    // temp.classList.add('viewTemp');
    addToStorage.classList.add('btnAddToStorage');

    addToStorage.innerHTML = 'Add';

    container.appendChild(location);
    container.appendChild(temp);
    container.appendChild(weather);
    container.appendChild(pressure);
    // container.appendChild(addToStorage);

    container.classList.add('weatherPanel');
    
    if(element.firstChild) {
        element.removeChild(element.firstChild);
    }

    element.appendChild(container);
}

let fillStoryData = (data, element) => {
    let container = document.createElement('div');
    let temp = document.createElement('p');

    location.innerHTML = `${data.name}, ${data.sys.country}`;
    temp.innerHTML = `${data.name}, ${data.sys.country}  <span class="viewTemp">${data.main.temp} °C</span>`;

    container.appendChild(temp);
    
    element.appendChild(container);
}

export {
    fillWeatherData,
    fillStoryData
}
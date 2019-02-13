let fillWeatherData = (data, element) => {

    let container = document.createElement('div');
    let location = document.createElement('h3');
    let temp = document.createElement('p');
    let weather = document.createElement('p');
    let pressure = document.createElement('p');

    location.innerHTML = `${data.name},${data.sys.country}`;
    temp.innerHTML = `Temperature: ${data.main.temp}°C`;
    weather.innerHTML = `Weather: ${data.weather[0].description}`;
    pressure.innerHTML = `Pressure: ${data.main.pressure}`;

    container.appendChild(location);
    container.appendChild(temp);
    container.appendChild(weather);
    container.appendChild(pressure);

    container.classList.add('weatherPanel');
    temp.classList.add('viewTemp');

    element.appendChild(container);
}

export {
    fillWeatherData
}
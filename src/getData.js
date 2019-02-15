let getSingleData = (url, appid, city, unit) => {
  let type = unit ? "metric" : "imperial";

  return fetch(`${url}weather?q=${city}&appid=${appid}&units=${type}`)
          .then(response => response.json())
          .catch( e => console.log('myErr'));
};

let getMultiData = (url, appid, citysId, unit) => {
  let type = unit ? "metric" : "imperial";

  return fetch(`${url}group?id=${citysId}&appid=${appid}&units=${type}`)
            .then(response => response.json());
};

let getForecastData = (url, appid, city, unit) => {
  let type = unit ? "metric" : "imperial";

  return fetch(`${url}forecast?q=${city}&appid=${appid}&units=${type}`)
            .then(response => response.json());
}

export { 
  getSingleData,
  getMultiData,
  getForecastData
};
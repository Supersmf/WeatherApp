export default function convertData(data) {
  return {
    country: data.sys.country,
    name: data.name,
    id: data.id,
    temp: data.main.temp,
    weather: data.weather[0].description,
    pressure: data.main.pressure,
  };
}

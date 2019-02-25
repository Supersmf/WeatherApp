// let storage = JSON.parse(localStorage.getItem('city')) || [];

const getLocalHistory = () => JSON.parse(localStorage.getItem('city')) || [];

const convertData = data => (
  {
    country: data.sys.country,
    name: data.name,
    id: data.id,
    temp: data.main.temp,
    weather: data.weather[0].description,
    pressure: data.main.pressure,
  }
);

const addToLocalStorage = (data) => {
  const storage = getLocalHistory();
  const strJSONid = storage.reduce((id, item) => `${id},${item.id}`, '');
  if (!strJSONid.includes(data.id)) {
    storage.push(data);
    localStorage.setItem('city', JSON.stringify(storage));
    return true;
  }
  return false;
};

export {
  getLocalHistory,
  addToLocalStorage,
  // removeFromLocalStorage,
  convertData,
};

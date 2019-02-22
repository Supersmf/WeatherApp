let storage = JSON.parse(localStorage.getItem('city')) || [];

const getLocalHistory = () => storage;

const convertData = data => (
  {
    country: data.sys.country,
    name: data.name,
    id: data.id,
  }
);

const setLocalHistory = (arr) => {
  localStorage.setItem('city', JSON.stringify(arr));
  console.log(storage);
};

const removeFromLocalStorage = (item) => {
  storage = storage.filter(el => el !== item);
  setLocalHistory(storage);
};

const addToLocalStorage = (data) => {
  if (!storage.includes(data.id)) {
    const item = convertData(data);
    storage.push(item);
    localStorage.setItem('city', JSON.stringify(storage));
    return true;
  }
  return false;
};

export {
  getLocalHistory,
  addToLocalStorage,
  removeFromLocalStorage,
};

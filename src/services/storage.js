let storage = JSON.parse(localStorage.getItem('city')) || [];

const getLocalHistory = () => storage;
const setLocalHistory = (arr) => {
  localStorage.setItem('city', JSON.stringify(arr));
};

const removeFromLocalStorage = (item) => {
  storage = storage.filter(el => el !== item);
  setLocalHistory(storage);
};

const addToLocalStorage = (data) => {
  if (!storage.includes(data.id)) {
    storage.push(data.id);
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

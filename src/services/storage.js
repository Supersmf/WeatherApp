let storage = JSON.parse(localStorage.getItem('city')) || [];

const getLocalHistory = () => storage;

const removeFromLocalStorage = (e) => {
  if (e.target.tagName === 'BUTTON') {
    const element = e.target.parentElement;
    const attrib = +element.getAttribute('cityID');

    storage = storage.filter(el => el !== attrib);
    localStorage.setItem('city', JSON.stringify(storage));
    element.parentElement.removeChild(e.target.parentElement);
  }
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

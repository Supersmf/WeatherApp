let storage = localStorage.getItem('city') || '';

const getLocalHistory = () => storage;

const removeFromLocalStorage = (e) => {
  if (e.target.tagName === 'BUTTON') {
    const element = e.target.parentElement;
    const attrib = element.getAttribute('cityID');

    storage = storage.split(',').filter(el => el !== attrib);
    storage = storage.join(',');
    localStorage.setItem('city', storage);
    element.parentElement.removeChild(e.target.parentElement);
  }
};

const addToLocalStorage = (data) => {
  if (storage.indexOf(data.id) === -1) {
    if (storage[0]) storage += ',';
    storage += `${data.id}`;
    localStorage.setItem('city', storage);
    return true;
  }
  return false;
};

export {
  getLocalHistory,
  addToLocalStorage,
  removeFromLocalStorage,
};

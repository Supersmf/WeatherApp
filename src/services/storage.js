const getLocalHistory = () => JSON.parse(localStorage.getItem('city')) || [];

const addToLocalStorage = (data) => {
  const storage = getLocalHistory();
  const include = getLocalHistory().find(({ id }) => id === data.id);
  if (!include) {
    storage.push(data);
    localStorage.setItem('city', JSON.stringify(storage));
    return true;
  }
  return false;
};

export {
  getLocalHistory,
  addToLocalStorage,
};

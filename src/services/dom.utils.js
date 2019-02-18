const changeTemp = (event, unit) => {
  const temp = document.querySelectorAll('.viewTemp');

  temp.forEach((e) => {
    let t = parseFloat(e.textContent);

    if (unit) {
      t = `${Math.round((t * 9) / 5 + 32).toFixed(0)} °F`;
      event.target.innerHTML = ' °C';
    } else {
      t = `${(((t - 32) * 5) / 9).toFixed(2)} °C`;
      event.target.innerHTML = ' °F';
    }
    e.textContent = t;
  });
};

export {
  changeTemp
};

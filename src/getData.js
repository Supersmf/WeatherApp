export default function getData(url, appid, city, unit) {

  let units = unit ? 'imperial' : 'metric';
  console.log(unit);
  
  return fetch(`${url}q=${city}&appid=${appid}&units=imperial`)
          .then(response => response.json()
  );
}

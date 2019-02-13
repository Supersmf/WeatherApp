export default function getData(url, appid, city) {
  
  return fetch(`${url}q=${city}&appid=${appid}`)
          .then(response => response.json()
  );
}

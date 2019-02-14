let getSingleData = (url, appid, city, unit) => {
  let type = unit ? 'metric' : 'imperial';

  return fetch(`${url}q=${city}&appid=${appid}&units=${type}`)
          .then(response => response.json()
          // .catch( e => console.log(e))        
  );
}

let getMultiData = (url, appid, citysId, unit) => {
  let type = unit ? 'metric' : 'imperial';

  return fetch(`${url}id=${citysId}&appid=${appid}&units=${type}`)
          .then(response => response.json()
          // .catch( e => console.log(e))        
  );
}

export {
  getSingleData,
  getMultiData
};
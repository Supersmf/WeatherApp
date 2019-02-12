export default function getLocation(url, appid) {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            let lon = position.coords.longitude;
            let lat = position.coords.latitude;

            console.log(`${url}lat=${lat}&lon=${lon}&appid=${appid}`);

            return fetch(`${url}lat=${lat}&lon=${lon}&appid=${appid}`)
                .then((response) => response.json()).then(res => console.log(res));
        })
               
    }
    
  };
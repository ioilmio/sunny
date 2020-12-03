import dom from './dom';

const API_KEY = '975ebbfa721d8a8a939f0e408d671547';
// const kelvin = 273;


const weather = async function getWeather() {
  // const city = document.querySelector('input').value;
  // console.log(cityInput);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Roma,IT&appid=${API_KEY}`;

  await fetch(url)
    .then(response => response.json())
    .then(weather => {
      console.log(weather);
      console.log(weather.weather[0].description);
      console.log(weather.weather[0].main)
      console.log(weather.weather[0].icon);
      console.log(weather.main.temp);
      console.log(weather.name);
      console.log(weather.sys.country);
      // console.log(dom.location);
      // dom.location.innerHTML = weather.name;


      return weather;
    }).catch((err) => console.log(err));
  // .then(weather => {
  //   console.log(weather);
  //   // weather.temperature.value = Math.floor(weather.main.temp - kelvin);
  //   // weather.icon = weather[0].icon;
  //   // weather.descr = weather.description;
  //   console.log(weather.city);
  //   weather.city = weather.name;
  //   const { country } = weather.sys.country;
  //   return { country };
  // });
};

export { weather as default };
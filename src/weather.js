// eslint-disable-next-line import/no-unresolved, import/extensions
import config from './config';
import iconImg from './icon';


export default async function getWeather(city) {
  const NODE_ENV = process.env.NODE_ENV ?? 'development';
  console.log(NODE_ENV);
  const key = NODE_ENV === 'development' ? config.API_KEY : process.env.API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`;

  await fetch(url)
    .then(response => response.json())
    .then(data => {
      const location = document.getElementById('location');
      location.textContent = `${data.name}, ${data.sys.country}`;

      const temperature = document.getElementById('temperature');
      temperature.textContent = `${Math.floor(data.main.temp)}`;

      const description = document.getElementById('description');
      description.textContent = `${data.weather[0].description.toUpperCase()}`;

      const icon = document.getElementById('weatherIcon');
      icon.src = `${iconImg(data.weather[0].icon)}`;
    }).catch(err => {
      const notification = document.getElementById('notificationBox');
      const box = document.getElementById('weatherContainer');
      notification.style.display = 'block';
      // box.style.display = 'none';
      notification.textContent = `
        ${err}
        Can't get weather data`;
      setTimeout(() => {
        notification.textContent = '';
        box.style.display = 'block';
      }, 1500);
    });
}

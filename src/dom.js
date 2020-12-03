import htmlTag from './htmlTag';
import weather from './weather';
import icon from './icon';

function dom() {
  const container = htmlTag('div', 'container', 'container');
  const appTitle = htmlTag('div', 'app-title', 'app-title', 'Sunny');
  const notificationBox = htmlTag('div', 'notificationBox', 'notification-box', 'notification');
  const weatherBox = htmlTag('div', 'weather-container', 'weather-container', 'weather-container');
  const weatherIcon = htmlTag('div', 'weatherIcon', 'weather-icon', 'weather-icon');
  const temperatureBox = htmlTag('div', 'temperatureBox', 'temperatureBox', 'temperatureBox');
  const location = htmlTag('div', 'location', 'location', 'location');
  const searchBox = htmlTag('input', 'search-box', 'search-box', 'search-box');
  const searchBtn = htmlTag('button', 'search-btn', 'search-btn', 'search-btn');


  document.body.appendChild(container);
  container.appendChild(appTitle);
  container.appendChild(notificationBox);
  container.appendChild(weatherBox);
  weatherBox.appendChild(weatherIcon);
  weatherBox.appendChild(temperatureBox);
  weatherBox.appendChild(location);
  weatherBox.appendChild(searchBox);
  weatherBox.appendChild(searchBtn);

  weatherIcon.innerHTML = `<img src="${icon}"/>`;
  // temperatureBox.innerHTML = `${weather.temperature.value}°<span>C</span>`;
  // console.log(weather().name);
  // location.textContent = `${weather.name}, ${weather.sys.country}`;
}


export { dom as default };
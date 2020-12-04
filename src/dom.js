import htmlTag from './htmlTag';

export default function dom() {
  const container = htmlTag('div', 'container', 'container');
  const appTitle = htmlTag('div', 'appTitle', 'app-title', 'Sunny');
  const notificationBox = htmlTag('div', 'notificationBox', 'notification-box', 'notification');
  const weatherBox = htmlTag('div', 'weatherContainer', 'weather-container');
  const weatherIcon = htmlTag('img', 'weatherIcon', 'weather-icon', 'weather-icon');
  const weatherDescription = htmlTag('h3', 'description', 'weather-description');
  const temperatureBox = htmlTag('div', 'temperatureBox', 'temperature-box');
  const temp = htmlTag('span', 'temperature', 'temperature', 'temp');
  const degrees = htmlTag('span', 'degrees', 'degrees', '°');
  const scale = htmlTag('span', 'scale', 'scale', 'C');
  const location = htmlTag('div', 'location', 'location', 'location');
  const searchBox = htmlTag('input', 'searchBox', 'search-box', 'search-box');
  const searchBtn = htmlTag('button', 'searchBtn', 'search-btn', 'search-btn');

  document.body.appendChild(container);
  container.appendChild(appTitle);
  container.appendChild(notificationBox);
  container.appendChild(weatherBox);
  weatherBox.appendChild(weatherIcon);
  weatherBox.appendChild(weatherDescription);
  weatherBox.appendChild(temperatureBox);
  temperatureBox.appendChild(temp);
  temperatureBox.appendChild(degrees);
  temperatureBox.appendChild(scale);
  weatherBox.appendChild(location);
  weatherBox.appendChild(searchBox);
  weatherBox.appendChild(searchBtn);
}

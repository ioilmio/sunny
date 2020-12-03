import dom from './dom';
import convertTemperature from './convert';
import weather from './weather';

const click = dom.temperatureBox.addEventListener('click', () => {
  if (weather.temperature.value === undefined) return;
  if (weather.temperature.unit === 'celsius') {
    let fahrenheit = convertTemperature(weather.temperature.value);
    fahrenheit = Math.floor(fahrenheit);
    dom.temperatureBox.textContent = `${fahrenheit}°F`;
    weather.temperature.unit = 'fahrenheit';
  } else {
    dom.temperatureBox.textContent = `${weather.temperature.value}°C`;
    weather.temperature.unit = 'celsius';
  }
});

export { click as default };
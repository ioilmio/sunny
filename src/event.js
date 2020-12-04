import { convertToCelsius, convertToFahrenheit } from './convert';

export default function convert() {
  const temperatureBox = document.getElementById('temperatureBox');

  temperatureBox.addEventListener('click', () => {
    const temp = document.querySelector('#temperature');
    const scale = document.querySelector('#scale');

    if (temp === undefined) return;
    if (scale.textContent === 'C') {
      let fahrenheit = convertToFahrenheit(temp.textContent);
      fahrenheit = Math.floor(fahrenheit);
      temp.textContent = `${fahrenheit}`;
      scale.textContent = 'F';
    } else {
      let celsius = convertToCelsius(temp.textContent);
      celsius = Math.floor(celsius);
      temp.textContent = `${celsius}`;
      scale.textContent = 'C';
    }
  });
}
import getWeather from './weather';
import getCityImage from './city';

export default function search() {
  const searchBtn = document.getElementById('searchBtn');
  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const input = document.getElementById('searchBox').value;
    getWeather(input);
    getCityImage(input);
  });
}
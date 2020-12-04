import getWeather from './weather';

export default function search() {
  const searchBtn = document.getElementById('searchBtn');
  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const input = document.getElementById('searchBox').value;
    getWeather(input);
  });
}
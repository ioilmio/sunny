import config from './config';

// All requests made with the client will be authenticated


export default async function getCityImage(city) {
  const KEY = config.PEXELS;
  const url = `https://api.pexels.com/v1/search?query=${city}&page=1`;
  await fetch(url, {
    method: 'GET',
    headers: {

      Accept: 'application/json',
      Authorization: KEY,
    },
  })
    .then(response => response.json())
    .then(photo => {
      const container = document.querySelector('body');
      container.style.backgroundImage = `url(${photo.photos[0].src.original})`;
    });
}

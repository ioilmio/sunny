import config from './config';

const KEY = config.PEXELS;

// All requests made with the client will be authenticated


export default async function getCityImage(city) {
  // const url = `https://api.unsplash.com/photos/random?`;
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
      // console.log(photo);
      // console.log(photo.photos[0].src.original);
      const container = document.querySelector('body');
      // console.log(container);
      container.style.backgroundImage = `url(${photo.photos[0].src.original})`;
      // const bodyTag = document.querySelector('body');
      // container.style.backgroundImage = `${photo.results[0].links.self}`;

      // console.log(photo.results[0].links.self);
      // photo[0]
    });
}

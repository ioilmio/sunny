export default async function getCityImage(city) {
  const url = `https://api.unsplash.com/photos/random`;
  await fetch(url)
    .then(response => response.json())
    .then(photo => console.log(photo));
}

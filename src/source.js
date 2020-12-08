import './style.min.css';
import dom from './dom';
import getWeather from './weather';
import convert from './event';
import search from './search';
import getCityImage from './city';

dom();
getWeather('catania');
convert();
search();
getCityImage('catania');
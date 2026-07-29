import './style.css';
import { location } from './currentLocation.js';
import apiProcessor from './apiHandler.js';
import domModder from './domManager.js';
const weatherApi = new apiProcessor();
const dom = new domModder(weatherApi);
try {
  const locationString = await location;
  weatherApi.getPosition(locationString);
  await dom.defaultCity();
} catch (error) {
  console.log(`This is the error : ${error}`);
}

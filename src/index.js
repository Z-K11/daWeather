import './style.css';
import { location } from './currentLocation.js';
import apiProcessor from './apiHandler.js';
import domModder from './domManager.js';
try {
  const locationString = await location;
  if (locationString) {
    const weatherApi = new apiProcessor(locationString);
    // weatherApi.getData();
  } else {
    throw new Error('Unable to get location');
  }
} catch (error) {
  console.log(`This is the error : ${error}`);
}
const dom = new domModder();

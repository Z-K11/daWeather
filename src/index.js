import { location } from './currentLocation.js';
import apiProcessor from './apiHandler.js';
const locationString = await location;
try {
  if (locationString) {
    const weatherApi = new apiProcessor(locationString);
    weatherApi.getData();
  } else {
    throw new Error('Unable to get location');
  }
} catch (error) {
  console.log(error);
}

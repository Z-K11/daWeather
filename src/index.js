import { location } from './currentLocation.js';
import apiProcessor from './apiHandler.js';
const locationString = await location;
const weatherApi = new apiProcessor(locationString);
weatherApi.getData();

import jsonHandler from './jsonProcessor.js';
export default class apiProcessor {
  #locationString;
  #latitude;
  #longitute;
  #apiKey = '9PS3QFHCD4X5LX5BV4R68PQ73';
  #dataHandler;

  getPosition(locationString) {
    this.#locationString = locationString.split(',');
    this.#latitude = this.#locationString[0];
    this.#longitute = this.#locationString[1];
  }
  showPosition() {
    console.log(`Latitude = ${this.#latitude},Longitute = ${this.#longitute}`);
  }
  returnPosition() {
    return `${this.#latitude},${this.#longitute}`;
  }
  async getData(address) {
    let apiQuery;
    if (address) {
      apiQuery = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${address}/next1days?unitGroup=metric&include=days&key=${this.#apiKey}`;
    } else {
      apiQuery = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${this.returnPosition()}/next1days?unitGroup=metric&include=days&key=${this.#apiKey}`;
    }
    const response = await fetch(apiQuery);
    const responseJson = await response.json();
    this.#dataHandler = new jsonHandler(responseJson);
  }
  returnApiData() {
    return this.#dataHandler.returnWeatherData();
  }
}

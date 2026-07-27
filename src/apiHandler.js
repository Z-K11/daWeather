export default class apiProcessor {
  #locationString;
  #latitude;
  #longitute;
  #apiKey = '9PS3QFHCD4X5LX5BV4R68PQ73';

  constructor(locationString) {
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
  async getData() {
    const apiQuery = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${this.returnPosition()}/next6days?unitGroup=metric&include=days&key=${this.#apiKey}`;
    const response = await fetch(apiQuery);
    const responseJson = await response.json();
    console.log(responseJson);
  }
}

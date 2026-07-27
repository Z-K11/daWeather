export default class apiProcessor {
  #locationString;
  #latitude;
  #longitute;
  constructor(locationString) {
    this.#locationString = locationString.split(',');
    this.#latitude = this.#locationString[0];
    this.#longitute = this.#locationString[1];
  }
  showPosition() {
    console.log(`Latitude = ${this.#latitude},Longitute = ${this.#longitute}`);
  }
}

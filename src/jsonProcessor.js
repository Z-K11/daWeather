export default class jsonProcessor {
  #data;
  constructor(json) {
    this.#data = json;
  }
  returnResolvedAddress() {
    return this.#data.resolvedAddress;
  }
  returnWeatherData() {
    return this.#data.days.map((day, index) => {
      return {
        forDay: index + 1, //check
        date: day.datetime, //check
        max: day.tempmax, //check
        min: day.tempmin, //check
        temp: day.temp, //check
        feelsLike: day.feelslike, //check
        humidity: day.humidity, //
        rainfall: day.precipprob, //
        description: day.conditions, //check
        icon: day.icon, //check
        sunrise: day.sunrise, //check
        sunset: day.sunset, //check
      };
    });
  }
}

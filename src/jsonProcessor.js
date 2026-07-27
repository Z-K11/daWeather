export default class jsonProcessor {
  #data;
  constructor(json) {
    this.#data = json;
  }
  returnWeatherData() {
    return this.#data.days.map((day, index) => {
      return {
        forDay: index + 1,
        date: day.datetime,
        max: day.tempmax,
        min: day.tempmin,
        temp: day.temp,
        feelsLike: day.feelslike,
        humidity: day.humidity,
        rainfall: day.precipprob,
        description: day.conditions,
        icon: day.icon,
      };
    });
  }
}

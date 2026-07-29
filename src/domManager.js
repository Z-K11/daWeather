import dayjs from 'dayjs';
import { checkAddress } from './addressValidator.js';
export default class domManipulator {
  #searchBar;
  #options;
  #regex = /^\p{L}+(?:[\s\-']\p{L}+)*$/u;
  #apiObject;
  #apiBody;
  constructor(weatherApi) {
    this.#searchBar = document.querySelector('#search');
    this.#options = document.querySelector('#options');
    this.#apiObject = weatherApi;
    let span = document.querySelector('#error');
    let spanDiv = document.querySelector('.spanDiv');
    let styleLine = document.querySelector('#line');
    this.#searchBar.addEventListener('keydown', async (event) => {
      if (event.key === 'Enter') {
        let city;
        event.preventDefault();
        if (this.#regex.test(this.#searchBar.value)) {
          city = this.#searchBar.value.trim();
        }
        if (city) {
          console.log(city);
          this.#searchBar.value = '';
          await this.#apiObject.getData(city);
          console.log(this.#apiObject.returnApiData());
          // console.log(this.#apiObject.returnCityName());
          this.appendToDom();
        }
      }
    });
    this.#searchBar.addEventListener('input', () => {
      if (!this.#regex.test(this.#searchBar.value)) {
        this.#searchBar.classList.add('displayOptionsInput');
        this.#options.classList.add('displayOptionsButton');
        spanDiv.classList.remove('hidden');
        spanDiv.classList.add('error');
        styleLine.classList.add('line');
        span.textContent = 'Please type a valid City Name.';
      } else {
        spanDiv.classList.add('hidden');
        span.textContent = '';
        this.#searchBar.classList.remove('displayOptionsInput');
        this.#options.classList.remove('displayOptionsButton');
      }
    });
  }
  appendToDom() {
    let cityName;
    const apiData = this.#apiObject.returnApiData();
    if (checkAddress(this.#apiObject.returnCityName()))
      cityName = this.#apiObject.returnCityName();
    else cityName = '';
    this.#apiBody = document.querySelector('.apiData');
    this.#apiBody.innerHTML = '';
    // 1,1,3,4,5,6,7,8,9,10,11
    apiData.forEach(async (element) => {
      const dataDiv = document.createElement('div');
      dataDiv.classList.add('dataDiv');
      const city = document.createElement('p');
      city.classList.add('city');
      city.textContent = cityName;
      const iconDiv = document.createElement('div');
      iconDiv.classList.add('iconDiv');
      const icon = document.createElement('img');
      this.#apiBody.appendChild(dataDiv);
      iconDiv.appendChild(icon);
      icon.src = new URL(`./assets/icons/${element.icon}.png`, import.meta.url);
      const dateDiv = document.createElement('div');
      const date = document.createElement('p');
      date.classList.add('date');
      date.textContent = `Date : ${element.date}`;
      dataDiv.appendChild(dateDiv);
      const tempDiv = document.createElement('div');
      const maxTemp = document.createElement('p');
      const minTemp = document.createElement('p');
      tempDiv.append(maxTemp, minTemp);
      tempDiv.classList.add('tempRange');
      maxTemp.textContent = `Max : ${element.max}C`;
      minTemp.textContent = `Min : ${element.min}C`;
      const avgDiv = document.createElement('div');
      const temp = document.createElement('p');
      temp.textContent = element.temp + 'C';
      avgDiv.appendChild(temp);
      avgDiv.classList.add('temp');
      const weatherInfoWrapper = document.createElement('div');
      const weatherData = document.createElement('div');
      weatherData.classList.add('weatherData');
      weatherInfoWrapper.classList.add('infoWrapper');
      const description = document.createElement('p');
      description.textContent = element.description;
      const rainfall = document.createElement('p');
      rainfall.textContent = `Chances of rain : ${element.rainfall}%`;
      const humidity = document.createElement('p');
      humidity.textContent = `Humidity : ${element.humidity}`;
      const feelsLike = document.createElement('p');
      feelsLike.textContent = `Feels Like : ${element.feelsLike}C`;
      const sunrise = document.createElement('p');
      sunrise.textContent = `Sunrise : ${dayjs(`${element.date} ${element.sunrise}`).format('h:mm A')}`;
      const sunset = document.createElement('p');
      sunset.textContent = `Sunset : ${dayjs(`${element.date} ${element.sunset}`).format('h:mm A')}`;
      weatherData.append(feelsLike, rainfall, humidity, sunrise, sunset);
      weatherInfoWrapper.append(description, weatherData);
      dataDiv.append(city, iconDiv, date, tempDiv, avgDiv, weatherInfoWrapper);
    });
  }
  async defaultCity() {
    await this.#apiObject.getData();
    this.appendToDom();
  }
}

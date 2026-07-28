export default class domManipulator {
  #searchBar;
  #options;
  #regex = /^\p{L}+(?:[\s\-']\p{L}+)*$/u;
  constructor() {
    this.#searchBar = document.querySelector('#search');
    this.#options = document.querySelector('#options');
    let span = document.querySelector('#error');
    let spanDiv = document.querySelector('.spanDiv');
    let styleLine = document.querySelector('#line');
    this.#searchBar.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        let city;
        event.preventDefault();
        if (this.#regex.test(this.#searchBar.value)) {
          city = this.#searchBar.value.trim();
        }
        if (city) {
          console.log(city);
          this.#searchBar.value = '';
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
}

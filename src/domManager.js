class domManipulator {
  #searchBar;
  #regex = /^[a-zA-Z]+$/;
  constructor() {
    this.#searchBar = document.querySelector('#search');
    this.#searchBar.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault;
        const city = this.#searchBar.ariaValueMax.trim();
        if (city) {
          console.log(city);
        }
      }
    });
    this.#searchBar.addEventListener('input', () => 
        {
            if(!this.#regex.test(this.#searchBar.value))
        });
  }
}

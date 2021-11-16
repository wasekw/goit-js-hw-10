// import countryMarkup from '../src/templates/countrymain.hbs'
import './css/styles.css';
import getRefs  from './js/getrefs';
// console.log(countryMarkup);

import debounce from 'lodash.debounce';
// // import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;
const refs = getRefs();
// function showError(error) {
//   console.log(error);
//   infoBox.innerHTML = 'Упс! Что-то пошло не так! Попробуйте еще раз!';
// }

// name.official - полное имя страны
// capital - столица
// population - население
// flags.svg - ссылка на изображение флага
// languages - массив языков
// v2/all?fields=name.official,capital,population,flags.svg,languages



refs.searchBox.addEventListener('input', debounce(inputCountryName, DEBOUNCE_DELAY));

function inputCountryName (event) {
  event.preventDefault();
  const name = event.target.value;
 fetchCountry(name).then(countries => getCountries(countries))
};


function fetchCountry (name) {
  return fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then((response) => {
      if (!response.ok) {
              throw new Error(response.status);
            }
      return response.json();
    }
  );
};



function getCountries(countries) {
  const countriesFind = countries
      .map(({ name, flags }) => {
          return `
          <li class="country-list__item">
              <img src="${flags.svg}" alt="Flag of ${name.official}" width="40" height="30">
              <p class="country-list__name">${name.official}</p>
          </li>
          `;
      })
      .join('');
      refs.countryList.innerHTML = countriesFind;
};
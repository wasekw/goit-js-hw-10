import './css/styles.css';
import getRefs  from './js/getrefs';
import API from './js/fetchcountry';

import debounce from 'lodash.debounce';
// // import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;
const refs = getRefs();
// function showError(error) {
//   console.log(error);
//   infoBox.innerHTML = 'Упс! Что-то пошло не так! Попробуйте еще раз!';
// }


refs.searchBox.addEventListener('input', debounce(inputCountryName, DEBOUNCE_DELAY));

function inputCountryName (event) {
  event.preventDefault();
  const name = event.target.value;
  API.fetchCountry(name).then(countries => getCountries(countries))
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
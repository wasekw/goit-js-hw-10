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
  API.fetchCountry(name).then(country => getCountry(country))
};



// function getCountries(countries) {
//   const countriesFind = countries
//       .map(({ name, flags }) => {
//           return `
//           <li class="country-list__item">
//               <img src="${flags.svg}" alt="Flag of ${name.official}" width="40" height="30">
//               <p class="country-list__name">${name.official}</p>
//           </li>
//           `;
//       })
//       .join('');
//       refs.countryList.innerHTML = countriesFind;
// };

function getCountry(country) {
      const countryFind = country.map(({ name, capital, population, flags, languages }) => {
      return `<div class="markup-div">
                   <img src="${flags.svg}" alt="Flag of ${name.official}" width="100" height="60">
                    <p class="markup-name">${name.official}</p>
                </div>
                <p class="markup-p">Capital: <span class="markup-span">${capital}</span></p>
                <p class="markup-p">Population: <span class="markup-span">${population}</span></p>
                <p class="markup-p">Languages: <span class="markup-span">${Object.values(languages).join(', ')}</span></p>`;
      }).join('');

      refs.countryList.innerHTML =countryFind;
}

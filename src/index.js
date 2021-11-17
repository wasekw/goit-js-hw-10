import './css/styles.css';
import getRefs  from './js/getrefs';
import API from './js/fetchcountry';
import Render from './js/rendercountry'

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
  API.fetchCountry(name).then(country => Render.getCountry(country))
};


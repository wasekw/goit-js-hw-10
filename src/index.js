import './css/styles.css';
import getRefs  from './js/getrefs';
import API from './js/fetchcountry';
import Render from './js/rendercountry'

import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;
const refs = getRefs();

refs.searchBox.addEventListener('input', debounce(inputCountryName, DEBOUNCE_DELAY));

function inputCountryName (event) {
  event.preventDefault();
  const name = event.target.value.trim();
  if (!name) {
    Render.clearCountry();
    Render.clearCountries();
    return;
  }

  API.fetchCountry(name).then(renderCountry).catch(showError);
};

function renderCountry (country) {

  if (country.length >= 10) {
    Notify.info("Too many matches found. Please enter a more specific name.");
    return;
  }

  if (country.length >= 2 && country.length < 10) {
    Render.clearCountry();
    Render.getCountries(country);
    return;
  }

  Render.clearCountries();
  Render.getCountry(country);
};

function showError() {
   Render.clearCountry();
   Render.clearCountries();
   Notify.failure("Oops, there is no country with that name");
};

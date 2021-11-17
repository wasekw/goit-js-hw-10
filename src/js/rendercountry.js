import getRefs  from "./getrefs";

const refs = getRefs();

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

  refs.infoBox.innerHTML =countryFind;
};

function clearCountry () {
  refs.infoBox.innerHTML = "";
};

function clearCountries () {
  refs.countryList.innerHTML = "";
}

export default { getCountries, getCountry, clearCountry, clearCountries };



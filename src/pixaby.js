const infoBox =document.querySelector('.couny-inftro');
const searchBox = document.querySelector('#search-box');


searchBox.addEventListener('change', startSearch);

function startSearch (event) {
  event.preventDefault();
  const whatFind = searchBox.value;

}
fetch('https://pixabay.com/api/?key=24307616-b0118d635ae4446a17d5d0140').then(response => response.json()).then(console.log);
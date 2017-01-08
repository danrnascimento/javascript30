const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

fetch(endpoint)
	.then(blob => blob.json())
	.then(data => cities.push(...data));

function findMacthes(wordToMatch, cities){

	return cities.filter(place => {
		const regex = new RegExp(wordToMatch, 'gi');
		return place.city.match(regex) || place.state.match(regex);
	});
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
	const matchArray = findMacthes(this.value, cities);
	const html = matchArray.map(place => {
		const regex = new RegExp(this.value, 'gi');
		const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
		const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`)

		return `
			<li data-lat="${place.latitude}" data-lng="${place.longitude}">
			<span class="name"> ${cityName}, ${stateName}</span>
			<span class="population">${numberWithCommas(place.population)}</span>
			</li>
		`;
	}).join('');
	suggestions.innerHTML = html;

	const locals = document.querySelectorAll('li');
	function updateMarker(){
		console.log(map);
		map.setCenter({ lat: parseFloat(this.dataset.lat), lng: parseFloat(this.dataset.lng) });
	}
	locals.forEach(local => local.addEventListener('click', updateMarker));
}

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: -34.397, lng: 150.644},
		scrollwheel: false,
		zoom: 10
	});
}



searchInput.addEventListener('keyup', displayMatches);





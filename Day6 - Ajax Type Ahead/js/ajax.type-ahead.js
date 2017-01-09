const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

fetch(endpoint) //get data
	.then(blob => blob.json())
	.then(data => cities.push(...data));

function findMacthes(wordToMatch, cities){ //filter the cities in array

	return cities.filter(place => {
		const regex = new RegExp(wordToMatch, 'gi');
		return place.city.match(regex) || place.state.match(regex);
	});
}

function numberWithCommas(x) { //use comma in the numbers
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
	const matchArray = findMacthes(this.value, cities);
	const html = matchArray.map(place => {
		const regex = new RegExp(this.value, 'gi'); //create new regex to highlight the word
		const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);  //apply highlight in city name
		const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`); //apply highlight in state name

		//return this html for each city
		return `
			<li data-lat="${place.latitude}" data-lng="${place.longitude}">
			<span class="name"> ${cityName}, ${stateName}</span>
			<span class="population">${numberWithCommas(place.population)}</span>
			</li>
		`;

	}).join('');
	suggestions.innerHTML = html; //include the li in the page

	const locals = document.querySelectorAll('li'); //get all Li with the locations
	function updateMarker(){ //function for update the map
		map.setCenter({ lat: parseFloat(this.dataset.lat), lng: parseFloat(this.dataset.lng) }); //update the map
	}
	locals.forEach(local => local.addEventListener('click', updateMarker)); //event to execute the function for update the map
}
//init google maps API
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: -34.397, lng: 150.644},
		scrollwheel: false,
		zoom: 10
	});
}


searchInput.addEventListener('keyup', displayMatches);
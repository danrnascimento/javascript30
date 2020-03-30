const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

fetch(endpoint) //get data
	.then(blob => blob.json())
	.then(data => cities.push(...data));

const findMacthes = (wordToMatch, cities) => {
	return cities.filter(place => {
		const regex = new RegExp(wordToMatch, 'gi');
		return place.city.match(regex) || place.state.match(regex);
	});
}

const numberWithCommas = (value) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const mapPlaceToItem = (value, place) => {
	const regex = new RegExp(value, 'gi');
	const cityName = place.city.replace(regex, `<span class="hl">${value}</span>`);
	const stateName = place.state.replace(regex, `<span class="hl">${value}</span>`);

	return `
		<li data-lat="${place.latitude}" data-lng="${place.longitude}">
			<span class="name"> ${cityName}, ${stateName}</span>
			<span class="population">${numberWithCommas(place.population)}</span>
		</li>
	`;
}

const displayMatches = (event) => {
	const value = event.target.value;
	const matchArray = findMacthes(value, cities);
	const html = matchArray.map(place => mapPlaceToItem(value, place)).join('');
	suggestions.innerHTML = html;
}

searchInput.addEventListener('keyup', displayMatches);
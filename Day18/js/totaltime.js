const movieList = document.querySelector('.movies');
const load = document.querySelector('.load');
const totalTag = document.querySelector('.time');
const allTimes = [];
const endpoint = "https://itunes.apple.com/search?term=Night+Shyamalan&media=movie&attribute=directorTerm&entity=movie";
let movies = [];

const setMovies = () => {
    let html = movies.map(movie => {
        const title = movie.trackName;
        const time = movie.trackTimeMillis;
        const url = movie.trackViewUrl;
        const cover = movie.artworkUrl100.replace('100x100', '1000x1000');

        return `
            <li data-time="${time}" data-cover="${cover}">
			    <a href="${url}" target="_blank">${title}</a>
			</li>`;
    }).join('');

    movieList.innerHTML = html;
    load.classList.add('hide');
}

const sumTime = () => {
    allTimes.push(...Array.from(document.querySelectorAll('[data-time]')));
    allTimes.forEach(item => {
        item.addEventListener('mouseover', function (e) {
            this.style.backgroundImage = `url("${this.dataset.cover}")`;
        });
        item.addEventListener('mouseleave', function (e) {
            this.style.backgroundImage = `url("")`;
        });
    });

    const seconds = allTimes
        .map(node => node.dataset.time).map(parseFloat)
        .map(timeNode => timeNode / 1000)
        .reduce((total, time) => total + time);

        let secondsLeft = seconds;
        const hours = Math.floor(secondsLeft / 3600);
        secondsLeft = secondsLeft % 3600;
        const minutes = Math.floor(secondsLeft / 60);
        secondsLeft = secondsLeft % 60;

        const timeString = `${hours}:${minutes}:${Math.round(secondsLeft)}`;
        totalTag.innerHTML = timeString;
}

jsonp(endpoint) // get data
	.then(data => {
        movies.push(...data.results);
        console.log(data);
        setMovies();
        sumTime();
    });



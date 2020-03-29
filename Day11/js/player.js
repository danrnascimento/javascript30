/* Elements */

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const toggle = player.querySelector('.toggle');
const progress = player.querySelector('.progress');
const progress_bar = player.querySelector('.progress__filled');
const ranges = player.querySelectorAll('input[type="range"]');
const skipButtons = player.querySelectorAll('[data-skip]');
const fullScreen = player.querySelector('.player__full_screen');
const fullWindow = player.querySelector('.player__full_window');

/* Functions */

const toggleIcon = () => {
	const icon = video.paused  ? '►' : '❚❚';
	toggle.innerText = icon;
}
const togglePlay = () => {	
	const method = video.paused ? 'play' : 'pause';
	video[method]();
}

const skip = (event) => {
	if(!event.currentTarget) return;
	const skip = parseFloat(event.currentTarget.dataset.skip);
	video.currentTime += skip;
}

const handleProgress = () => {
	const percentage = (video.currentTime / video.duration) * 100;
	progress_bar.style.flexBasis = `${percentage}%`;
}

const handleRangeUpdate = (event) => {
	if(!event.currentTarget) return;
	const nameRange = event.currentTarget.name;
	const valueRange = event.currentTarget.value;
	if (downClick) {
		video[nameRange] = parseFloat(valueRange);
	}
}

const scrub = (event) => {
	const scrubTime = (event.offsetX / progress.offsetWidth) * video.duration;
	video.currentTime = scrubTime;
}

const toggleFullWindow = () => {
	const val = isFull ? '100%' : 'auto';
	player.style.width = `${val}`;
	player.style.height = `${val}`;
}

/* Event listeners */

video.addEventListener('click', () => {
	togglePlay();
	toggleIcon();
});

toggle.addEventListener('click', () => {
	togglePlay();
	toggleIcon();
});

skipButtons.forEach(button => button.addEventListener('click', skip));
video.addEventListener('timeupdate', handleProgress);

let isFull = false;
fullWindow.addEventListener('click', () => {
	isFull = !isFull;
	toggleFullWindow();
});

let downClick = false;
ranges.forEach(range => range.addEventListener('mousedown', () => downClick = true));

ranges.forEach(range => range.addEventListener('mouseup', () => downClick = false));

ranges.forEach(range => range.addEventListener('click', (event) => {
	downClick = true;
	handleRangeUpdate(event);
}));

ranges.forEach(range => range.addEventListener('mousemove',handleRangeUpdate));
progress.addEventListener('click', scrub);
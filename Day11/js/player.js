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

function toggleIcon () {
	const icon = video.paused  ? '►' : '❚❚';
	toggle.innerText = icon;
}
function togglePlay () {	
	const method = video.paused ? 'play' : 'pause';
	video[method]();
}

function skip () {
	const skip = parseFloat(this.dataset.skip);
	video.currentTime += skip;
}

function handleProgress () {
	const percentage = (video.currentTime / video.duration) * 100;
	progress_bar.style.flexBasis = `${percentage}%`;
}

function handleRangeUpdate () {
	const nameRange = this.name;
	const valueRange = this.value;
	if (downClick){
		video[nameRange] = parseFloat(valueRange);
	}	
}

function scrub (e) {
	const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
	video.currentTime = scrubTime;
}

function toggleFullWindow () {
	const val = isFull ? '100%' : 'auto';
	player.style.width = `${val}`;
	player.style.height = `${val}`;
}

/* Event listeners */

video.addEventListener('click', function () {
	togglePlay();
	toggleIcon();
});
toggle.addEventListener('click', function () {
	togglePlay();
	toggleIcon();
});

skipButtons.forEach(button => button.addEventListener('click', skip));
video.addEventListener('timeupdate', handleProgress);

let isFull = false;
fullWindow.addEventListener('click', function () {
	isFull = !isFull;
	toggleFullWindow();
});

let downClick = false;
ranges.forEach(range => range.addEventListener('mousedown', () => downClick = true));

ranges.forEach(range => range.addEventListener('mouseup', () => downClick = false));

ranges.forEach(range => range.addEventListener('click', function(){
	downClick = true;
	handleRangeUpdate();
}));

ranges.forEach(range => range.addEventListener('mousemove',handleRangeUpdate));
progress.addEventListener('click', scrub);
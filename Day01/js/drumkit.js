const keys = document.querySelectorAll('.key');

const onPlay = (event) => {
	const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
	if(!audio) return;
	
	key.classList.add('playing');
	audio.currentTime = 0;
	audio.play();
}

const removeTransition = (event) => {
	if (event.propertyName !== 'transform' ) return;
	this.classList.remove('playing');
}

const onUp = () => {
	keys.forEach(key => key.classList.remove('playing'));
}


keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', onPlay);
window.addEventListener('keyup', onUp);
window.addEventListener('touchstart', onPlay);
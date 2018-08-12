const keys = document.querySelectorAll('.key');

function onPlay(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //select the audio tag by key code
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); //select the div tag by key code
	if(!audio) return; //stop the function from running all together
	
	key.classList.add('playing');
	audio.currentTime = 0;//rewind to the start
	audio.play(); //play audio
}

function removeTransition(e) {
	if (e.propertyName !== 'transform' ) return; //skip it if it's not a transform
	this.classList.remove('playing');
}

// fix an issue
function onUp(e) {
	keys.forEach(key => key.classList.remove('playing'));
}


keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', onPlay);
window.addEventListener('keyup', onUp);
window.addEventListener('touchstart', onPlay);
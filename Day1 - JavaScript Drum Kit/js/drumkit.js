function onPlay(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //select the audio tag by key code
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); //select the div tag by key code
	
	if(!audio) return; //stop the function from running all together

	audio.currentTime = 0;//rewind to the start
	audio.play(); //play audio

	key.classList.add('playing');
}

function removeTransition(e) {
	if (e.propertyName !== 'transform' ) return; //skip it if it's not a transform
	this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', onPlay);
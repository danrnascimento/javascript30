console.log("Gifs by Birthday Bot (http://giphy.com/birthday) ");

const panels = document.querySelectorAll('.panel');

function addOpen () {
	this.classList.add('open');
}	

function removeOpen () {
	this.classList.remove('open');
}

function toggleActive (e) {
	if(e.propertyName.includes('flex')){
		this.classList.toggle('open-active');
	}
}

panels.forEach(panel => panel.addEventListener('mouseover', addOpen));
panels.forEach(panel => panel.addEventListener('mouseleave', removeOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
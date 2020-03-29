console.log("Gifs by Birthday Bot (http://giphy.com/birthday) ");

const panels = document.querySelectorAll('.panel');

const addOpen = (event) => {
	event.currentTarget.classList.add('open');
}	

const removeOpen = (event) => {
	event.currentTarget.classList.remove('open');
}

const toggleActive = (event) => {
	if(event.propertyName.includes('flex')){
		event.currentTarget.classList.toggle('open-active');
	}
}

panels.forEach(panel => panel.addEventListener('mouseover', addOpen));
panels.forEach(panel => panel.addEventListener('mouseleave', removeOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
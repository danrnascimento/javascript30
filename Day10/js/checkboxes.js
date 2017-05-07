const checkboxes = document.querySelectorAll('input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
	
	let inBetween = false;	
	if(e.shiftKey && this.checked) {
		checkboxes.forEach(checkbox => {
			
			if(inBetween) {
				checkbox.checked = true;
			}
			if(checkbox === this || checkbox === lastChecked) {
				inBetween = !inBetween;
			}

		});
	}

	lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
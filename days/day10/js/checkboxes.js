const checkboxes = document.querySelectorAll('input[type="checkbox"]');

let lastChecked;

const handleCheck = (event) => {
	
	let inBetween = false;	
	if(event.shiftKey && event.currentTarget.checked) {
		checkboxes.forEach(checkbox => {
			
			if(inBetween) {
				checkbox.checked = true;
			}
			if(checkbox === event.currentTarget || checkbox === lastChecked) {
				inBetween = !inBetween;
			}

		});
	}

	lastChecked = event.currentTarget;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
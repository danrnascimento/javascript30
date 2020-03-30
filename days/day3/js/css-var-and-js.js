

const inputs = document.querySelectorAll('.controls input');

const handleUpdate = () => {
	const suffix = this.dataset.suffix || '';
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
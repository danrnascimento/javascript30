
function debounce(func, wait = 20, immediate = true) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}

const sliderImages = document.querySelectorAll('.slide-in');
const bg = document.querySelector('.full-bg');

function checkSlide(e) {
	sliderImages.forEach(sliderImage => {
		const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.offsetHeight / 2;
		const imageBottom = sliderImage.offsetTop + sliderImage.offsetHeight;
		const isHalfShown = slideInAt > sliderImage.offsetTop;
		const isNotScrolledPast = window.scrollY < imageBottom;
		if (isHalfShown && isNotScrolledPast) {
			bg.style.background = "#050505";
			console.dir(bg.style);
		}
	});
}
window.addEventListener('scroll', debounce(checkSlide));
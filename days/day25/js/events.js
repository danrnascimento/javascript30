const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

const logText = (event) => {
    console.log(event.currentTarget.classList.value);
    event.currentTarget.stopPropagation(); // stop bubbling!
    console.log(event.currentTarget);
}
divs.forEach(div => div.addEventListener('click', logText, {
    capture: false,
    once: true
}));

button.addEventListener('click', () => console.log('Click!!!'), { once: true });
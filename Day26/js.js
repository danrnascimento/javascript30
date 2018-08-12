
const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter() {
    
    const dropdown = this.querySelector('.dropdown');
    
    this.classList.add('trigger-enter');
    background.classList.add('open');
    setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);

    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();

    const coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left
    }

    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('top', `${coords.top}px`);
    background.style.setProperty('left', `${coords.left}px`);

}

function handleLeave() {
    this.classList.remove('trigger-enter-active');
    this.classList.remove('trigger-enter');
    background.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener("mouseenter", handleEnter));
triggers.forEach(trigger => trigger.addEventListener("mouseleave", handleLeave));

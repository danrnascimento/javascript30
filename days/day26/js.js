
const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter(event) {
    
    const dropdown = event.currentTarget.querySelector('.dropdown');
    if(!dropdown) return;

    event.currentTarget.classList.add('trigger-enter');
    background.classList.add('open');

    setTimeout(() => {
        if(event.target.classList.contains('trigger-enter')) {
            event.target.classList.add('trigger-enter-active')
        }
    }, 150);
    
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

const handleLeave = (event) => {
    event.currentTarget.classList.remove('trigger-enter-active');
    event.currentTarget.classList.remove('trigger-enter');
    background.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener("mouseenter", handleEnter));
triggers.forEach(trigger => trigger.addEventListener("mouseleave", handleLeave));

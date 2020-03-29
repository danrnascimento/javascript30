const body = document.querySelector('body');
const title = document.querySelector('h1');
const walk = 100;

const shadow = (event) => {
    const {offsetWidth: width, offsetHeight: height} = title;
    let {offsetX: x, offsetY: y} = event;

    if(event.currentTarget !== event.target) {
        x = x + event.target.offsetLeft;
        y = y + event.target.offsetTop; 
    }

    const xWalk = Math.round((x / width  * walk) - (walk / 1.5));
    const yWalk = Math.round((y / height * walk) - (walk / 1.5));

    title.style.color = `hsl(${xWalk + yWalk}, 100%, 50%)`;
    title.style.textShadow = `
        ${xWalk * 2}px ${yWalk}px 0 rgba(250, 238, 28, .6),
        ${xWalk * -2}px ${yWalk}px 0 rgba(243, 85, 142, .6),
        ${yWalk * 2}px ${xWalk}px 0 rgba(156, 29, 231, .6),
        ${yWalk * -2}px ${xWalk}px 0 rgba(88, 27, 152, .6)`;

}

title.addEventListener('mousemove', shadow);
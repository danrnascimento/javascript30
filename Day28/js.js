const speed  = document.querySelector(".speed");
const bar = document.querySelector(".speed-bar");
const video = document.querySelector(".flex");

const handleMove = (event) => {

    const moveY = event.pageY - event.currentTarget.offsetTop;
    const percent = moveY / event.currentTarget.offsetHeight;
    const min = 0.5;
    const max = 5;
    const height = Math.round(percent * 100) + "%";
    const playbackRate = percent * (max - min) + min;

    bar.style.height = height;
    bar.textContent = playbackRate.toFixed(2) + 'x';
    video.playbackRate = playbackRate;

}


speed.addEventListener('mousemove', handleMove);
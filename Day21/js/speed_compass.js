const speed = document.querySelector('.speed');
const compass = document.querySelector('svg');

const compassFunction = (data) => {
    speed.textContent = data.coords.speed;
    compass.style.transform = `rotate(${data.coords.heading}deg)`;

    if(data.coords.speed == null || data.coords.heading == null) {
        alert('Please, use a device with speedometer and compass');
    }
}

if (navigator.geolocation) {
    navigator.geolocation.watchPosition(
        (data) => compassFunction(data),
        (err) => { console.log(err) }
    );
}

function timeClock (e) {
	
	const now = new Date();

	const seconds = now.getSeconds();
	const minutes = now.getMinutes();
	const hours = now.getHours();

	const secondHand = document.querySelector('.second-hand');
	const minuteHand = document.querySelector('.min-hand');
	const hourHand = document.querySelector('.hour-hand');
	

	const secondDegree = ((seconds / 60) * 360) + 90;
	const minuteDegree = ((minutes / 60) * 360) + 90;
	const hourDegree = ((hours / 12) * 360) + 90;


	secondHand.style.transform = `rotate(${secondDegree}deg)`;
	minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
	hourHand.style.transform = `rotate(${hourDegree}deg)`;


}

setInterval(timeClock, 1000);
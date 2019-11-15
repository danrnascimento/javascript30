import React, { useEffect, useRef } from 'react';
import './css/clock.css';

const Day02 = () => {

    const secondHand = useRef(null);
    const minuteHand = useRef(null);
    const hourHand = useRef(null);

    useEffect(() => {
        setInterval(timeClock, 1000);
        return () => {
            clearInterval(timeClock);
        }
    }, []);

    const timeClock  = (e) => {
	
        const now = new Date();
    
        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours();
    
        const secondDegree = ((seconds / 60) * 360) + 90;
        const minuteDegree = ((minutes / 60) * 360) + 90;
        const hourDegree = ((hours / 12) * 360) + 90;

        secondHand.current.style.transform = `rotate(${secondDegree}deg)`;
        minuteHand.current.style.transform = `rotate(${minuteDegree}deg)`;
        hourHand.current.style.transform = `rotate(${hourDegree}deg)`;
    
    }
    

    return (	
        <div className="clock">
            <div className="clock-face">
                <div className="hand hour-hand" ref={hourHand}></div>
                <div className="hand min-hand" ref={minuteHand}></div>
                <div className="hand second-hand" ref={secondHand}></div>
            </div>
        </div>
    )

}

export default Day02;
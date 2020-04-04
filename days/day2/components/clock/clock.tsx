import React, { FC, useEffect, useState } from 'react';
import ClockHand from '../clock-hand/clock-hand';
import './clock.scss';

const timeToClock = (date: Date) => {
    const seconds = ((date.getSeconds() / 60) * 360) + 90;
	const minutes = ((date.getMinutes() / 60) * 360) + 90;
    const hours = ((date.getHours() / 12) * 360) + 90;
    
    return { seconds, minutes, hours };
}

const Clock: FC = () => {

    const [ secondDegree, setSecondDegree ] = useState(0);
    const [ minuteDegree, setMinuteDegree ] = useState(0);
    const [ hourDegree, setHourDegree ] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const { seconds, minutes, hours } = timeToClock(new Date());
            setHourDegree(hours);
            setMinuteDegree(minutes);
            setSecondDegree(seconds);
        }, 1000);
        return () => { clearInterval(interval) }
    }, []);

    return (
        <div className="clock">
            <div className="clock_face">
                <ClockHand degree={secondDegree} />
                <ClockHand degree={minuteDegree} />
                <ClockHand className="clock_face_hour-hand" degree={hourDegree} />
            </div>
        </div>
    );

}

export default Clock;

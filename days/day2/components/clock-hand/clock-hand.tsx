import React, { FC } from 'react';
import './clock-hand.scss';

interface IClockHand {
    className?: string,
    degree: number
}

const ClockHand: FC<IClockHand> = ({ className, degree }) => {
    return (
        <div className={"hand " + (className || '')} style={ { transform: `rotate(${degree || 0}deg)` } }></div>
    );
}

export default ClockHand;
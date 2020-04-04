import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ClockHand from './components/clock-hand/clock-hand';
import './index.scss';
import Clock from './components/clock/clock';


const Day02 = () => {

    return (
        <Clock />
    );
}

export default Day02;

ReactDOM.render(<Day02 />, document.getElementById("root"));
import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/clock/clock';
import './index.scss';

const Day02 = () => (<Clock />);

export default Day02;

ReactDOM.render(<Day02 />, document.getElementById("root"));
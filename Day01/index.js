import React from 'react';
import Key from './key';
import './css/drumkit.css';

const Day01 = () => {

    const keys = [
        { key: 65, audio: '/sounds/clap.wav' },
        { key: 83, audio: '/sounds/hihat.wav' },
        { key: 68, audio: '/sounds/kick.wav' },
        { key: 70, audio: '/sounds/openhat.wav' },
        { key: 71, audio: '/sounds/boom.wav' },
        { key: 72, audio: '/sounds/ride.wav' },
        { key: 74, audio: '/sounds/snare.wav' },
        { key: 75, audio: '/sounds/tom.wav' },
        { key: 76, audio: '/sounds/tink.wav' }
    ];

    return (
        <div className="keys">
            { keys.map(item => (    
                <Key key={item.key} keyCode={item.key} audioSrc={item.audio} />
            ))}
        </div>
    )

}

export default Day01;

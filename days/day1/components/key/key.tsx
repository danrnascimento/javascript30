import React, { FC, useState, useRef, useEffect } from 'react';
import useKeyBinding from '../../hooks/use-key-binding';
import './key.scss';

const Audios: { [key: number]: string } = {
    65: "clap.wav",
    83: "hihat.wav",
    68: "kick.wav",
    70: "openhat.wav",
    71: "boom.wav",
    72: "ride.wav",
    74: "snare.wav",
    75: "tom.wav",
    76: "tink.wav",
}

interface IKey {
    keyCode: number
}

const Key: FC<IKey> = ({ keyCode }) => {

    const audioRef = useRef<HTMLAudioElement>();
    const [ playing, setPlaying ] = useState(false);
    const action = useKeyBinding([ keyCode ]);

    useEffect(() => {
        if (action === "down") {
            setPlaying(true);
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        } else {
            setPlaying(false);
        }
    }, [ action ]);

    return (
        <div className={`key ${ playing ? 'key--playing' : '' }`}>
            <kbd>{ String.fromCharCode(keyCode) }</kbd>
            <span className="sound"></span>
            <audio ref={audioRef} src={`assets/sounds/${ Audios[keyCode] }`} />
        </div>
    );

}

export default Key;
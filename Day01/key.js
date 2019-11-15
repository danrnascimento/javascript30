import React, { useRef, useEffect, useState } from 'react';

const Key = ({ keyCode, audioSrc }) => {

    const audioRef = new Audio(audioSrc);
    const keyRef = useRef(null);
    const [ play, setPlay ] = useState(false);
    
    const keyListener = (event) => {
        if(event.keyCode == keyCode) {
            setPlay(event.type === 'keydown');
        }
    }

    const onPlay = () => {
        if(!audioRef) return;
        audioRef.currentTime = 0;
        audioRef.play();
    }

    useEffect(() => {
        window.addEventListener('keydown', keyListener);
        window.addEventListener('keyup', keyListener);
        return () => {
            window.removeEventListener('keydown', keyListener);
            window.removeEventListener('keyup', keyListener);
        }
    }, []);

    useEffect(() => {
        if(play) onPlay();
        else audioRef.pause();
    }, [play]);

    return (
        <div ref={keyRef} className={play ? "key playing" : "key" } data-key={keyCode}>
            <kbd>{ String.fromCharCode(keyCode) }</kbd>
            <span className="sound"></span>
        </div>
    );
}

export default Key;
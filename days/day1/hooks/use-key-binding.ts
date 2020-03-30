import { useEffect, useState } from "react";

/**
 * Listen the keyboad and trigger when the selected key is typed.
 * @param keysToBind Key codes to bind.
 * @param callback Bypass the event using callback.
 */
const useKeyBinding = (keysToBind: number[], callback?: (event: KeyboardEvent) => any) => {
    
    const [ action, setAction ] = useState<string>(null);

    const listenDown = (event: KeyboardEvent,) =>  {
        if(!keysToBind.includes(event.keyCode)) return;
        if(callback) callback(event);
        setAction('down');
    };

    const listenUp = (event: KeyboardEvent) => {
        if(!keysToBind.includes(event.keyCode)) return;
        if(callback) callback(event);
        setAction('up');
    };

    useEffect(() => {
        document.addEventListener('keydown', listenDown);
        document.addEventListener('keyup', listenUp);

        return () => {
            document.removeEventListener('keydown', listenDown);
            document.removeEventListener('keyup', listenUp);        
        }
    }, []);

    return action;
}

export default useKeyBinding;
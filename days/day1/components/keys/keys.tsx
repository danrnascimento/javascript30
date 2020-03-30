import React, { FC } from 'react';
import Key from '../key/key';
import './keys.scss';

interface IKeys {
    keys: string[]
}

const Keys: FC<IKeys> = ({ keys }) => {

    return (
        <div className="keys">
            { keys.map(item => (<Key key={item} keyCode={ item.charCodeAt(0) } />)) }
        </div>
    );

}

export default Keys;
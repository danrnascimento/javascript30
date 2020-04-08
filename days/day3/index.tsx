import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import style from './index.scss';
import Controls from './components/controls/controls';
import ImagePanel from './components/image-panel/image-panel';

const Day03: FC = () => {
    return (
        <div className={ style.imageEditor }>
            <Controls />
            <ImagePanel />
        </div>
    );
};

export default Day03;

ReactDOM.render(<Day03 />, document.getElementById("root"));
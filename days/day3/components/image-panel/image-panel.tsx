import React, { FC } from 'react';
import style from './image-panel.scss';

const ImagePanel: FC = () => {

    console.log( style.imagePanelImg );
    return (
        <div className={style.imagePanel}>
            <img src="https://www.thispersondoesnotexist.com/image" className={style.imagePanelImg} />
        </div>
    );
}

export default ImagePanel
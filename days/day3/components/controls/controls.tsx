import React, { FC, ChangeEvent } from 'react';
import Slider from '../slider/slider';
import ColorPicker from '../color-picker/color-picker';
import style from './controls.scss';

const Controls: FC = () => {

    const handleBorder = (event: ChangeEvent) => {
        const value = (event.target as HTMLInputElement).value;
        if(!value) return;
        document.documentElement.style.setProperty("--border", value + 'px');
    }

    const handleBlur = (event: ChangeEvent) => {
        const value = (event.target as HTMLInputElement).value;
        if(!value) return;
        document.documentElement.style.setProperty("--blur", value + 'px');
    }

    const handleColor = (event: ChangeEvent) => {
        const value = (event.target as HTMLInputElement).value;
        if(!value) return;
        document.documentElement.style.setProperty("--base", value);
    }

    const handleOpacity = (event: ChangeEvent) => {
        const value = (event.target as HTMLInputElement).value;
        if(!value) return;
        document.documentElement.style.setProperty("--opacity", value);
    }

    return (
        <div className={ style.controls }>
            <Slider
                name="border"
                label="Border"
                min={0}
                max={100}
                onChange={handleBorder}/>

            <Slider
                name="blur"
                label="Blur"
                min={0}
                max={10}
                onChange={handleBlur}/>
            
            <ColorPicker
                name="base_color"
                label="Base color"
                onChange={handleColor} />

            <Slider
                name="opacity"
                label="Opacity"
                min={0}
                max={1}
                step={0.1}
                defaultValue={1}
                onChange={handleOpacity}/>
        </div>
    );
}

export default Controls;

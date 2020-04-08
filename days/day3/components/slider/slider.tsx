import React, { FC, ChangeEvent } from 'react';
import style from './slider.scss';

interface ISlider {
    label: string,
    name: string,
    min?: number,
    max?: number,
    step?: number,
    defaultValue?: number,
    onChange?: (event: ChangeEvent) => any
}

const Slider: FC<ISlider> = ({ label, name, min, max, step, onChange, defaultValue }) => {
    return (
        <div className={ style.slider }>

            <label className={ style.sliderLabel } htmlFor={ name }>
                { label }:
            </label>

            <input
                type="range"
                className={ style.sliderInput }
                id={ name }
                name={ name }
                step={ step || 1 }
                min={ min || 0 }
                max={ max || 100 }
                defaultValue={ defaultValue || 0 }
                onChange={ (e) => onChange && onChange(e) }
            />

        </div>
    );
}

export default Slider;

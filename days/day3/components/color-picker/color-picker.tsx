import React, { FC, ChangeEvent } from 'react';
import style from './color-picker.scss';

interface IColorPicker {
    label: string,
    name: string,
    onChange?: (event: ChangeEvent) => any
}

const ColorPicker: FC<IColorPicker> = ({ label, name, onChange }) => {

    return (
        <div className={ style.colorPicker }>

            <label
                className={style.colorPickerLabel }
                htmlFor={ name }>
                { label }:
            </label>

            <input
                className={ style.colorPickerInput }
                type="color"
                name={ name }
                onChange={ (e) => onChange && onChange(e) }
                defaultValue="#FFFFFF"
            />

        </div>
    );

}

export default ColorPicker;

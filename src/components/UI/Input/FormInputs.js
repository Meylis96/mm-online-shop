import React from 'react';
import './Input.scss';

const FormInputs = props => {
    const inputType = props.type || 'text';
    const cls = [
        'input',
        [props.type]
    ];
    const htmlFor = `${inputType}-${Math.random()}`;

    return (
        <div className={cls.join(' ')}>
            <input
            type={inputType}
            id={htmlFor}
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}
        />
        </div>
    )


}

export default FormInputs;
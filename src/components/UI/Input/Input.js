import React from 'react';
import './Input.scss';
import Button from '../Button/Button';

const Input = props => {
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
        <Button type={'search'}>Поиск</Button>
        </div>
    )


}

export default Input;
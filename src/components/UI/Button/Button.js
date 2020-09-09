import React from 'react';
import './Button.scss';

const Button = props => {
    const cls = [
        'button',
        [props.type],
    ];

    return (
        <button
        className={cls.join('__')}
        onClick={props.onToggle}
        >
            {props.children}
        </button>
    )
}

export default Button;
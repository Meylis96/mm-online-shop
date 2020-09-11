import React from 'react';
import './Input.scss';

const TextArea = props => {
    const textAreaType = props.type || 'text';
    const cls = [
        'textArea',
        [props.type]
    ];
    const htmlFor = `${textAreaType}-${Math.random()}`;

    return (
        <div className={cls.join(' ')}>
            <textarea
                type={textAreaType}
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}>
            </textarea>
        </div>
    )


}

export default TextArea;
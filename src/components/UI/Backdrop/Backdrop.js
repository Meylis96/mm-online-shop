import React from 'react';
import './Backdrop.scss';

const Backdrop = props =>{
    
    const cls = [
        'backdrop'
    ];

    if(props.isOpen){
        cls.push('open_backdrop');
    } else {
        cls.push('');
    }

    return(
        <div className={cls.join(' ')} onClick={props.onClick}/>
    )
}

export default Backdrop;
import React from 'react';
import './Burger.scss';

export const Burger = props => {
    const cls = [
        'header__menu'
    ];


    if(props.isOpen){
        cls.push(' active');
    } else {
        cls.push('');
    }

    return(
        <>
        <div className={cls.join('_burger')} onClick={props.onToggle}>
            <span></span>
            <span></span>
            <span></span>
        </div>

        </>
    )

};

export const BurgerCatalog = props => {
    const cls = [
        'header__catalog'
    ];

    if(props.isOpen){
        cls.push(' open');
    } else {
        cls.push('');
    }

    return(
        <div className={cls.join('_burger')} onClick={props.onToggle}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )

};

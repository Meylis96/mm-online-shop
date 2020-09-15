import React from 'react';
import './Catalog.scss';
import powder from './img/powder.svg';
import soap from './img/soap.svg';
import shampoo from './img/shampoo.svg';
import paper from './img/paper.svg';
import deodarant from './img/deodorant.svg';
import {NavLink} from 'react-router-dom';

const Catalog = props => {
    const cls = [
        'catalog'
    ];
    
    if(props.isOpen){
        cls.push('catalog_active');
    } else {
        cls.push('');
    }

    return(
        <div className={cls.join(' ')}>
            <div className="container">
                <ul>
                    <li>
                        <NavLink to="/products/powder">Порошки
                        <img src={powder} alt="powder"></img></NavLink>
                           
                    </li>
                    <li>
                        <NavLink to="/products/soap">Мыло
                        <img src={soap} alt="soap"></img></NavLink>
                    </li>
                    <li>
                        <NavLink to="/products/shampoo">Шампуни
                        <img src={shampoo} alt="shampoo"></img></NavLink>
                    </li>
                    <li>
                        <NavLink to="/products/paper">Бумажные изделия
                        <img src={paper} alt="paper"></img></NavLink>
                    </li>
                    <li>
                        <NavLink to="/products/deodorant">Дезодоранты
                        <img src={deodarant} alt="deodarant"></img></NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Catalog;
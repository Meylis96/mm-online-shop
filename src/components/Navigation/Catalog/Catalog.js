import React from 'react';
import './Catalog.scss';
import powder from './img/powder.svg';
import soap from './img/soap.svg';
import shampoo from './img/shampoo.svg';
import paper from './img/paper.svg';
import deodarant from './img/deodorant.svg';

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
                        <a href="#">Порошки
                        <img src={powder} alt="powder"></img></a>
                           
                    </li>
                    <li>
                        <a href="#">Мыло
                        <img src={soap} alt="soap"></img></a>
                    </li>
                    <li>
                        <a href="#">Шампуни
                        <img src={shampoo} alt="shampoo"></img></a>
                    </li>
                    <li>
                        <a href="#">Бумажные изделия
                        <img src={paper} alt="paper"></img></a>
                    </li>
                    <li>
                        <a href="#">Дезодоранты
                        <img src={deodarant} alt="deodarant"></img></a>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Catalog;
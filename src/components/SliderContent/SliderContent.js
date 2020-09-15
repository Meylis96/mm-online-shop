import React from 'react';
import './SliderContent.scss';
import Button from '../UI/Button/Button';
import {NavLink} from 'react-router-dom';

export function SliderContent({bgImg, title, subtitle, index, btnArr}){
    return (
        <div key={index} className="slider__content" style={{
            background: `url(${bgImg})center / cover no-repeat`,
            height: '100%'
            }}>
            <div className="slider__info">
              <h1 className="slider__title">{title}</h1>
              <p className="slider__subtitle">{subtitle}</p>
              <Button type={'slider'}><span></span><NavLink to="/products"><h1>К товарам</h1><img src={btnArr} alt="btn"></img></NavLink></Button>
            </div>
        </div>
    )
}

export default SliderContent;
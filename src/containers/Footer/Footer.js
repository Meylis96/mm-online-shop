import React, { Component } from 'react';
import './Footer.scss';
import logo from './logo.svg';
import insta from './insta.svg';
import facebook from './facebook.svg';
import imo from './imo.svg';
import {NavLink} from 'react-router-dom';

class Footer extends Component{

    scrollOnClick = () => {
        window.scroll(0, 0);
    }

    render(){
        return(
            <footer className="footer">
                <div className="container">
                    <div className="footer__info">
                        <div className="footer__logo">
                            <NavLink to="/"><img src={logo} alt="logo"></img></NavLink>
                        </div>

                        <div className="footer__nav">
                            <h1>Навигация</h1>
                            <ul>
                                <li><NavLink onClick={this.scrollOnClick} to="/">Главная</NavLink></li>
                            </ul>
                            <ul>
                                <li><NavLink onClick={this.scrollOnClick}  to="/about">О Нас</NavLink></li>
                            </ul>
                            <ul>
                                <li><NavLink onClick={this.scrollOnClick}  to="/delivery">Доставка и оплата</NavLink></li>
                            </ul>
                            <ul>
                                <li><NavLink onClick={this.scrollOnClick}  to="/contacts">Контакты</NavLink></li>
                            </ul>
                            <ul>
                                <li><NavLink onClick={this.scrollOnClick}  to="/products">Товары</NavLink></li>
                            </ul>
                        </div>

                        <div className="footer__social">
                            <h1>Мы в соц. сетях</h1>
                            <div className="footer__item">
                                <img src={insta} alt="insta"></img>
                                <a href="#">Instagram</a>
                            </div>

                            <div className="footer__item">
                                <img src={facebook} alt="facebook"></img>
                                <a href="#">Facebook</a>
                            </div>
                            <div className="footer__item">
                                <img src={imo} alt="imo"></img>
                                <a href="#">IMO</a>
                            </div>
                        </div>
                    </div>

                    <div className="footer__end">
                        <h1>© 2020 - Все права защищены</h1>

                        <div>
                            <span>Сайт разработан студией:</span>
                            <a href="https:\\www.meyliswebdev.com" target="blank"> MM Web Studio</a>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;
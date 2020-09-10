import React, { Component }  from 'react';
import './Menu.scss';
import {NavLink} from 'react-router-dom';


class MenuElems extends Component{
    clickHandler = () => {
        this.props.onClose();
    }

    render(){
        const cls = [
            'menu'
        ];
    
        if(this.props.isOpen){
            cls.push('open_menu');
        } else {
            cls.push('');
        }
        return(
            <div className={cls.join(' ')}>
            <div className="container">
                <div className="menu__container">
                    <ul className="menu__items">
                        <li className="menu__item"><NavLink to="/"  onClick={this.clickHandler}>Главная</NavLink></li>
                        <li className="menu__item"><NavLink to="/about" onClick={this.clickHandler}>О Нас</NavLink></li>
                        <li className="menu__item"><NavLink to="/delivery" onClick={this.clickHandler}>Доставка и оплата</NavLink></li>
                        <li className="menu__item"><NavLink to="/" onClick={this.clickHandler}>Контакты</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
        )
    }
}

export default MenuElems;
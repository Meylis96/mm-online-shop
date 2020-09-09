import React  from 'react';
import './Menu.scss';

const Menu = props =>{   

    const cls = [
        'menu'
    ];

    if(props.isOpen){
        cls.push('open_menu');
    } else {
        cls.push('');
    }
    
    return(
        <>
        <div className={cls.join(' ')}>
            <div className="container">
                <div className="menu__container">
                    <ul className="menu__items">
                        <li className="menu__item"><a href="#">Главная</a></li>
                        <li className="menu__item"><a href="">О Нас</a></li>
                        <li className="menu__item"><a href="">Доставка и оплата</a></li>
                        <li className="menu__item"><a href="">Контакты</a></li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Menu;
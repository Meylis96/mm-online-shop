import React, { Component } from 'react';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import './HeaderNav.scss';
import logo from './logo.svg';
import {Burger, BurgerCatalog} from '../Burger/Burger';
import MenuElems from '../Menu/Menu';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Catalog from '../Catalog/Catalog';

class HeaderNav extends Component {

    state = {
        menu: false,
        catalog: false,
        openMenu: false
    }

    toggleBurgerHandler = () => {
        this.setState({
            menu: !this.state.menu,
            openMenu: !this.state.openMenu
        })
    }

    toggleCatalogHandler = () => {
        this.setState({
            catalog: !this.state.catalog
        })
    }

    burgerCloseHandler = () => {
        this.setState({
            menu: false,
            openMenu: false
        })
    }

    catalogCloseHandler = () => {
        this.setState({
            catalog: false
        })
    }

    preventScroll = () => {
        document.body.style = "overflow:hidden"
    };


    render() {
        return (
            <>
            <header className="header">
                <div className="container">
                    <nav>
                        <a href="#"><img src={logo} alt="logo"></img></a>
                        <Button 
                            type={'header'}
                            onToggle={this.toggleCatalogHandler}
                            isOpen={this.state.catalog}>
                            <div className="header__catalog">
                                <h1>Каталог</h1>
                                <BurgerCatalog
                                onToggle={this.toggleCatalogHandler}
                                isOpen={this.state.catalog}/>
                            </div>
                        </Button>
                        <Input placeholder={'Искать на сайте...'}/>
                        <div className="header__items">
                            <div className="header__heart"><div>0</div></div>
                            <div className="header__cart"><div>0</div></div>
                        </div>
                        <div className="header__menu">
                            <Burger 
                                onToggle={this.toggleBurgerHandler} 
                                isOpen={this.state.menu}/>
                        </div>
                    </nav>
                </div>
                <MenuElems isOpen={this.state.openMenu} onClose={this.burgerCloseHandler}/>
                <Backdrop isOpen={this.state.openMenu} onClick={this.toggleBurgerHandler}/>
                
                <Catalog isOpen={this.state.catalog}/>
                {this.state.menu ? this.preventScroll() : document.body.style.overflow = ""}
            </header>
            
            
            
            </>
        )
    }
}

export default HeaderNav;
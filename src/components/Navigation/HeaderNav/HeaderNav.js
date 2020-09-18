import React, { Component } from 'react';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import './HeaderNav.scss';
import logo from './logo.svg';
import {Burger, BurgerCatalog} from '../Burger/Burger';
import MenuElems from '../Menu/Menu';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Catalog from '../Catalog/Catalog';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

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

        this.props.cartUpdated();

        let total = 0;
        this.props.cart.map(item => total += item.product.price * item.quantity);

        return (
            <>
            <header className="header">
                <div className="container">
                    <nav>
                        <NavLink to="/"><img src={logo} alt="logo"></img></NavLink>
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
                            <NavLink to="/liked" className="header__heart"><div>0</div></NavLink>
                            <NavLink to="/cart" className="header__cart"><div>
                                {
                                    this.props.cart.length > 0 ? (
                                        <span>{ this.props.cart.length }</span>
                                    ) : 0
                                }
                            </div></NavLink>
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
                
                <Catalog isOpen={this.state.catalog} />
                {this.state.menu ? this.preventScroll() : document.body.style.overflow = ""}
            </header>
            
            
            
            </>
        )
    }
}

const mapStateToProps = (state) => {
 
    return {
        cart: state.cart.cart,
        cartUpdated: () => { return true }
    }
};
 
export default connect(mapStateToProps)(HeaderNav);
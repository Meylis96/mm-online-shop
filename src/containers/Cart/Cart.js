import React, { Component } from 'react';
import './Cart.scss';
import Item from './Item';
import Loader from '../../components/UI/Loader/Loader';
import { connect } from 'react-redux';
import Modal from '../Modal/Modal';

function loaderSpinner(){
    return new Promise((resolve) => setTimeout(() => resolve(), 1500));
}


class Cart extends Component{

    state = {
        loader: true,
        show: false
    };

    componentDidMount(){
        loaderSpinner().then(() => this.setState({loader: false}));
    }

    showModal = () => {
        this.setState({ show: true });
    };
    
    hideModal = () => {
        this.setState({ show: false });
    };

    preventScroll = () => {
        document.body.style = "overflow:hidden"
    };

    submitionHandler = e =>{
        e.preventDefault();
        console.log('Sent')
    }


    render(){
        const {loader} = this.state;

        let total = 0;

        this.props.cart.map(item => total += item.product.price * item.quantity);

        if(loader) { 
            return <Loader/>;
        }
        
        const cart  = this.props.cart.length > 0?(
            <div>
                <div className="panel-body">
                    {
                        this.props.cart.map(item => {
                            return (
                                <div key={item.product.id}>
                                    <Item item={item} />
                                    <hr />
                                </div>
                            )
                        })
                    }
                </div>
                <div className="cart__footer">
                    <h4>Общая сумма {total ? total : '00'}.00 ТМТ</h4>
                    <button type="button" onClick={this.showModal} disabled={!total}>Оформить заказ</button>
                </div>
            </div>
 
        ) : (
            <div className="panel-body">
                <h2>Корзина Пуста</h2>
            </div>
        )
 
        return (
            <>
                <div className="cart">
                    <div className="container">
                        <h1 className="cart__title">Корзина</h1>
                        <div className="cart__descr">
                            <label>Изображение</label>
                            <label>Наименование</label>
                            <label>Цена</label>
                            <label>Кол-во.</label>
                        </div>
                        { cart }
                    </div>
                    {this.state.show ? this.preventScroll() : document.body.style.overflow = ""}
                    
                </div>
                <Modal show={this.state.show} handleClose={this.hideModal}>
                    <form className="modal__form" onSubmit={this.submitionHandler}>
                        <h1 className="modal__title">Пожалуйста введите свои данные</h1>
                        <div className="modal__info">
                            <input type="text" placeholder="Ваше имя" required name="name"/>
                            <input type="tel" placeholder="Ваш номер" required name="tel"/>
                            <input type="text" placeholder="Ваш адрес" required name="address" />
                        </div>
                            <div className="modal__descr">
                                <p>Общая сумма: {total} TMT</p>
                                <button className="modal__send">Отправить</button>
                            </div>
                    </form>
                </Modal>
            </>
        )
    }
}

const mapStateToProps = (state) => {
 
    return {
        cart: state.cart.cart
    }
  };
   
  export default connect(mapStateToProps)(Cart);
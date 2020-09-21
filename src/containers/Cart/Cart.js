import React, { Component } from 'react';
import './Cart.scss';
import Item from './Item';
import Loader from '../../components/UI/Loader/Loader';
import { connect } from 'react-redux';

function loaderSpinner(){
    return new Promise((resolve) => setTimeout(() => resolve(), 1500));
}


class Cart extends Component{
    state = {
        loader: true
    };

    componentDidMount(){
        loaderSpinner().then(() => this.setState({loader: false}));
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
                </div>
            </div>
 
        ) : (
            <div className="panel-body">
                <h2>Корзина Пуста</h2>
            </div>
        )
 
        return (
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
                </div>
        )
    }
}

const mapStateToProps = (state) => {
 
    return {
        cart: state.cart.cart
    }
  };
   
  export default connect(mapStateToProps)(Cart);
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
                <div className="panel-footer">
                    <div className="row text-center">
                        <div className="col-xs-11">
                            <h4 className="text-right">Общая сумма <strong>ТМТ{total.toFixed(3)}</strong></h4>
                        </div>
                    </div>
                </div>
            </div>
 
        ) : (
            <div className="panel-body">
                <h2>Корзина Пуста</h2>
            </div>
        )
 
        return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-xs-12">
                            <div className="panel panel-info">
                                <div className="panel-heading">
                                    <div className="panel-title">
                                        <div className="row">
                                            <div className="col-xs-6">
                                                <h1><span className="glyphicon glyphicon-shopping-cart"></span>Корзина</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
 
                                { cart }
 
                            </div>
                        </div>
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
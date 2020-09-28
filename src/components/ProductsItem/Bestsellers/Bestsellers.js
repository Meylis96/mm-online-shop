import React, { Component} from 'react';
import ProductsItems from '../ProductsItems';
import Loader from '../../UI/Loader/Loader';
import './Bestsellers.scss';
import { connect } from 'react-redux';
import {addToCart} from '../../store/actions/cartActions';
import {addToFav} from '../../store/actions/likeActions';


function loaderSpinner(){
    return new Promise((resolve) => setTimeout(() => resolve(), 1500));
}


class Bestsellers extends Component{
    state = {
        loader: true,
    };


    addToCart = (product) => {
        this.props.addToCart(product);
    }

    addToFav = (product) => {
        this.props.addToFav(product);
    }

    componentDidMount(){
        loaderSpinner().then(() => this.setState({loader: false}));
    }


    render(){
        const {loader} = this.state;

        if(loader) { 
            return <Loader/>;
        }

        return(
            <div className="bestsellers">
                <div className="container">
                    <h1 className="bestsellers__title">Бестселлеры</h1>
                    <div className="bestsellers__wrapper">
                        {
                            this.props.products.map(product => <ProductsItems product={product} addToCart={this.addToCart} addToFav={this.addToFav} inCart={this.props.cart.length>0 && this.props.cart.filter(e => e.product.id === product.id).length > 0 } like={this.props.like.length > 0 && this.props.like.filter(e => e.product.id === product.id).length > 0 }  key={product.id} /> )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.bestsellers.products,
        cart: state.cart.cart,
        like: state.like.like
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product) => {
            dispatch(addToCart(product));
        },
        addToFav: (product) => {
            dispatch(addToFav(product));
        }
    }
};
 
 
export default connect(mapStateToProps, mapDispatchToProps)(Bestsellers);
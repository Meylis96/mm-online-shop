import React, { Component} from 'react';
import ProductsItems from '../ProductsItems';
import Loader from '../../UI/Loader/Loader';
import './Soap.scss';
import soap from './img/soap.jpg';
import heart from './img/like.svg';
import heartRed from './img/liked.svg';
import { connect } from 'react-redux';
import {addToCart} from '../../store/actions/cartActions';


function loaderSpinner(){
    return new Promise((resolve) => setTimeout(() => resolve(), 1500));
}


class Soap extends Component{
    state = {
        item: [
            {
                cls: 'soap',
                img: soap,
                productName: 'Жидкое мыло турецкое',
                price: 200,
                heart: heart,
                qty: 1,
                id: 1
            },
            {
                cls: 'soap',
                img: soap,
                productName: 'Жидкое мыло ТМ',
                price: 200,
                heart: heart,
                qty: 1,
                id: 2
            },
        ],
        loader: true,
    };


    addToCart = (product) => {
        this.props.addToCart(product);
    }

    componentDidMount(){
        loaderSpinner().then(() => this.setState({loader: false}));
    }

    handleClick = id => {
        this.setState(prevState => prevState.item[id].heart = heartRed);
    }

    /*
    likedBtn = () => {
        this.setState((prevState) => ({
            item: prevState.item.map(
                obj => (obj.heart === heart ? Object.assign(obj, {heart: heartRed}): obj)
            )
        }));
        console.log('liked');
    } */


    render(){
        const {loader} = this.state;

        if(loader) { 
            return <Loader/>;
        }

        return(
            <div className="soap">
                <div className="container">
                    <h1 className="soap__title">Мыло</h1>
                    <div className="soap__wrapper">
                        {
                            this.props.products.map(product => <ProductsItems product={product} addToCart={this.addToCart} inCart={this.props.cart.length>0 && this.props.cart.filter(e => e.product.id === product.id).length > 0 } key={product.id} /> )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.soap.products,
        cart: state.cart.cart
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product) => {
            dispatch(addToCart(product));
        }
    }
};
 
 
export default connect(mapStateToProps, mapDispatchToProps)(Soap);
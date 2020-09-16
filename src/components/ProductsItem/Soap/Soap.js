import React, { Component } from 'react';
import ProductsItems from '../ProductsItems';
import Loader from '../../UI/Loader/Loader';
import './Soap.scss';
import soap from './img/soap.jpg';
import heart from './img/like.svg';
import heartRed from './img/liked.svg';


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
                qty: 1
            },
            {
                cls: 'soap',
                img: soap,
                productName: 'Жидкое мыло ТМ',
                price: 200,
                heart: heart,
                qty: 1
            },

        ]
    };

    clickHandler = () => {
        console.log('Added to cart');
    }

    componentDidMount(){
        loaderSpinner().then(() => this.setState({loader: false}));
    }

    likedBtn = () => {
        this.setState((prevState) => ({
            item: prevState.item.map(
                obj => (obj.heart === heart ? Object.assign(obj, {heart: heartRed}): obj)
            )
        }));
        console.log('liked');
    }


    render(){
        const {loader} = this.state;

        if(loader) { 
            return <Loader/>;
        }

        return(
            <div className="soap">
                <div className="container">
                    <h1 className="powder__title">Мыло</h1>
                    <div className="powder__wrapper">
                        {
                            this.state.item.map((item, index) => {
                                return (
                                    <div key={index} className="soap__items">
                                        <ProductsItems /*input={this.handleChange} qty={item.qty} minus={this.minusItem} plus={this.plusItem}*/ liked={this.likedBtn} addToCart={this.clickHandler} cls={item.cls} img={item.img} productName={item.productName} price={item.price} heart={item.heart} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            )
    }
}

export default Soap;
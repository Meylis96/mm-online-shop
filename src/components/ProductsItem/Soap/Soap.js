import React, { Component } from 'react';
import ProductsItems from '../ProductsItems';
import Loader from '../../UI/Loader/Loader';
import './Soap.scss';
import soap from './img/soap.jpg';
import heart from './img/like.svg';


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
                heart: heart
            },
            {
                cls: 'soap',
                img: soap,
                productName: 'Жидкое мыло ТМ',
                price: 200,
                heart: heart
            },

        ]
    };

    componentDidMount(){
        loaderSpinner().then(() => this.setState({loader: false}));
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
                                        <ProductsItems cls={item.cls} img={item.img} productName={item.productName} price={item.price} heart={item.heart} />
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
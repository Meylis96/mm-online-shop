import React, { Component } from 'react';
import ProductsItems from '../ProductsItems';
import Loader from '../../UI/Loader/Loader';
import './Powder.scss';
import ariel_12 from './img/ariel_12.jpg';
import heart from './img/like.svg';


function loaderSpinner(){
    return new Promise((resolve) => setTimeout(() => resolve(), 1500));
}


class Powder extends Component{
    state = {
        item: [
            {
                cls: 'powder',
                img: ariel_12,
                productName: 'Стиральный порошок Ariel 1,5 КГ',
                price: 200,
                heart: heart
            },
            {
                cls: 'powder',
                img: ariel_12,
                productName: 'Стиральный порошок Ariel 1,5 КГ',
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
            <div className="powder">
                <div className="container">
                    <h1 className="powder__title">Порошки</h1>
                    <div className="powder__wrapper">
                        {
                            this.state.item.map((item, index) => {
                                return (
                                    <div key={index} className="powder__items">
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

export default Powder;
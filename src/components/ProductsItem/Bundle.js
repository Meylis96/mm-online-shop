import React, { Component } from 'react';
import ProductsItems from './ProductsItems';
import Loader from '../UI/Loader/Loader';


function loaderSpinner(){
    return new Promise((resolve) => setTimeout(() => resolve(), 1500));
}


class Bundle extends Component{
    state = {
        name: 'Готовые наборы',
        descr: 'лучшие цены',
        price: '200TMT',
        loader: true
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
            <ProductsItems title={this.state.name} descr={this.state.descr} price={this.state.price}/>
        )
    }
};

export default Bundle;
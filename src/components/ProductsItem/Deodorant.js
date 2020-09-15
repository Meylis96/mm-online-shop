import React, { Component } from 'react';
import ProductsItems from './ProductsItems';
import Loader from '../UI/Loader/Loader';


function loaderSpinner(){
    return new Promise((resolve) => setTimeout(() => resolve(), 1500));
}

class Deodorant extends Component{
    state = {
        name: 'Дезодоранты',
        descr: 'лучшие дезодоранты',
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

export default Deodorant;
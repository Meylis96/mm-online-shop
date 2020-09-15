import React, { Component } from 'react';
import './Products.scss';
import ProductsMenu from '../../components/ProductsItem/ProductLinks';
import powder from './img/powder.jpg';
import soap from './img/soap.jpg';
import shampoo from './img/shampoo.jpg';
import paper from './img/paper.jpg';
import deodorant from './img/deodorant.jpg';
import sale from './img/sale.jpg';
import discount from './img/discount.jpg';
import bundle from './img/bundle.jpg';
import Loader from '../../components/UI/Loader/Loader';

function loaderSpinner(){
    return new Promise((resolve) => setTimeout(() => resolve(), 1500));
}

class Products extends Component {
    state = {
        productsArr: [
            {src: powder, name : "powder"},
            {src: soap, name : "soap"},
            {src: shampoo, name : "shampoo"},
            {src: paper, name : "paper"},
            {src: deodorant, name : "deodorant"},
            {src: sale, name : "sale"},
            {src: discount, name : "discount"},
            {src: bundle, name : "bundle"},
        ],
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
        return (
            <div className="products">
                <div className="container">
                    <h1 className="products__title">Товары</h1>

                    <div className="products__wrapper">
                        {
                        this.state.productsArr.map((item, index)=>{
                            return (
                                <div key={index} className="products__link">
                                    <ProductsMenu src={item.src} name={item.name} />
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

export default Products;
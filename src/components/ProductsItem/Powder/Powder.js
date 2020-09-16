import React, { Component } from 'react';
import ProductsItems from '../ProductsItems';
import Loader from '../../UI/Loader/Loader';
import './Powder.scss';
import ariel_12 from './img/ariel_12.jpg';
import heart from './img/like.svg';
import heartRed from './img/liked.svg';


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
                heart: heart,
                qty: 1
            },
            {
                cls: 'powder',
                img: ariel_12,
                productName: 'Стиральный порошок Ariel 1,5 КГ',
                price: 200,
                heart: heart,
                qty: 1
            },
        ],
        loader: true
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

    // toggleLiked = () => {
    //     this.state.item
    // }

    /*
    plusItem = () => {
        let itemsCopy = JSON.parse(JSON.stringify(this.state.item))
        //make changes to ingredients
            itemsCopy[0].qty = itemsCopy[0].qty + 1
            this.setState({
                item: itemsCopy
            })
        // this.setState(prevState => ({
        //     item: prevState.item.map(
        //         obj => (obj.qty === 0 ? Object.assign(obj, {qty: 0 + 1}): obj)
        //     )
        // }))
    }

    minusItem = () => {
        let itemsCopy = JSON.parse(JSON.stringify(this.state.item))
            itemsCopy[0].qty = itemsCopy[0].qty - 1
            this.setState({
                item: itemsCopy
            })
    }

    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    };*/


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

export default Powder;
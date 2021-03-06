import React, { Component } from 'react';
import liked from './liked.svg';

class ProductsDetails extends Component{
    state = {
        inCart: this.props.inCart,
        like: this.props.like
    };

    addToCart = e => {
        e.preventDefault();

        this.props.addToCart(this.props.product);

        this.setState({
            inCart: true
        })
    }

    addToFav = e => {
        e.preventDefault();
        this.props.addToFav(this.props.product);

        this.setState({
            like: true
        })
    }



    render(){
        const {product} = this.props;
        return(
            <div className={product.cls + '__item'} key={product.id}>
                <img src={product.image} alt={product.cls}></img>
                <hr/>
                <p className={product.cls + '__descr'}>{product.productName}</p>
                <div className={product.cls + '__info'}>
                <p className={product.cls + '__price'}>{product.price} TMT</p>
                <div>
                    {/* <button onClick={minus}>-</button> */}
                    {/* <input type="text" value={qty} onChange={input}/> */}
                    {/* <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select> */}
                    {/* <button onClick={plus}>+</button> */}
                </div>
                </div>
                <div className={product.cls + '__buy'}>
                <button onClick={this.addToCart}>В корзину</button>
                <img className={product.cls + '__like'} src={this.state.like ? liked : product.heart} alt="heart" onClick={this.addToFav}></img>
                </div>
            </div>
        )
    }
};

export default ProductsDetails;
import React from 'react';

const ProductsDetails = ({cls, img, productName, price, heart}) => {
    return(
        <div className={cls + '__item'}>
            <img src={img} alt={cls + Math.round(Math.random())}></img>
            <hr/>
            <p className={cls + '__descr'}>{productName}</p>
            <div className={cls + '__info'}>
            <p className={cls + '__price'}>{price} TMT</p>
            <div>
                <button>-</button>
                <h1>0</h1>
                <button>+</button>
            </div>
            </div>
            <div className={cls + '__buy'}>
                <button>В корзину</button>
                <img className={cls + '__like'} src={heart} alt="heart"></img>
            </div>
        </div>
    )
};

export default ProductsDetails;
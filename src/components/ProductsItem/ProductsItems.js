import React from 'react';

const ProductsDetails = ({cls, img, productName, price, heart, addToCart, plus, minus, qty, input, liked}) => {
    return(
        <div className={cls + '__item'}>
            <img src={img} alt={cls + Math.round(Math.random())}></img>
            <hr/>
            <p className={cls + '__descr'}>{productName}</p>
            <div className={cls + '__info'}>
            <p className={cls + '__price'}>{price} TMT</p>
            <div>
                {/* <button onClick={minus}>-</button> */}
                {/* <input type="text" value={qty} onChange={input}/> */}
                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                {/* <button onClick={plus}>+</button> */}
            </div>
            </div>
            <div className={cls + '__buy'}>
            <button onClick={addToCart}>В корзину</button>
                <img className={cls + '__like'} src={heart} alt="heart" onClick={liked}></img>
            </div>
        </div>
    )
};

export default ProductsDetails;
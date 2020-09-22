import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCartQuantity, removeFromCart } from '../../components/store/actions/cartActions';
import './Cart.scss';
 
 
class Item extends Component {
 
    state = {
        quantity: this.props.item.quantity,
        btnVisible: true
    };
 
    handleChange = e => {
 
        if(e.target.value <= 0) {
            e.target.value = 1;
            return;
        }
 
        if(e.target.value > this.props.item.product.amount) {
            alert("Превышено максимальное колличество товара в наличии");
 
            return;
        }
 
        if(this.state.quantity !== e.target.value) {
            this.setState({
                quantity: e.target.value,
                btnVisible: true,
            });
        }
    }
 
    handleSubmit = (e) => {
        e.preventDefault();
 
        this.props.updateCartQuantity(this.props.item.product.id, this.state.quantity);
 
        this.setState({
            btnVisible: false
        });
    }
 
    handleRemove = (e) => {
        this.props.removeFromCart(this.props.item.product.id);
    }
 
  render() {
 
      const { item } = this.props;
 
      return (
          <div className="cart__items">
              <div className="cart__img"><img src={item.product.image} alt={item.product.productNanme}/>
              </div>
              <div className="cart__product_name">
                  <h1>{item.product.title}</h1>
              </div>
                <div className="cart__product_price">
                    <h1>{ item.product.price } TMT</h1>
                </div>
                  <form onSubmit={this.handleSubmit}>
                      <div className="cart__qty">
                          <input placeholder="1" type="number" min="1" className="form-control input-sm" onChange={this.handleChange} value={this.state.quantity} required/>
                      </div>
 
                      {
                          this.state.btnVisible?(
                              <div className="cart__add">
                                  <button type="submit"></button>
                              </div>
                          ) : null
                      }
 
                      <div className="cart__delete">
                          <button type="button" onClick={this.handleRemove}></button>
                      </div>

                  </form>
          </div>
      )
  }
}
 
const mapDispatchToProps = (dispatch) => {
 
    return {
        updateCartQuantity: (productId, quantity) => dispatch(updateCartQuantity(productId, quantity)),
        removeFromCart: (productId) => dispatch(removeFromCart(productId))
    }
};
 
export default connect(null, mapDispatchToProps)(Item);
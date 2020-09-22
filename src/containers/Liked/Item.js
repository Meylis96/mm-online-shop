import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateFavQuantity, removeFromFav } from '../../components/store/actions/likeActions';
import './Liked.scss';
 
 
class Item extends Component {
 
    state = {
        quantity: this.props.item.quantity,
        btnVisible: true
    };
 
    handleRemove = (e) => {
        this.props.removeFromFav(this.props.item.product.id);
    }
 
  render() {
 
      const { item } = this.props;
 
      return (
          <div className="like__item">
              <div className="like__img"><img src={item.product.image} alt={item.product.productNanme}/>
              </div>
              <div className="like__product_name">
                  <h1>{item.product.title}</h1>
              </div>
                  <div>
                      <div className="like__delete">
                          <button type="button" onClick={this.handleRemove}></button>
                      </div>
                  </div>
          </div>
      )
  }
}
 
const mapDispatchToProps = (dispatch) => {
 
    return {
        updateFavQuantity: (productId, quantity) => dispatch(updateFavQuantity(productId, quantity)),
        removeFromFav: (productId) => dispatch(removeFromFav(productId))
    }
};
 
export default connect(null, mapDispatchToProps)(Item);
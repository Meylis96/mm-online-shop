import {v4} from 'node-uuid';

export const addToCart = (product) => {

    return {
        type: 'ADD_TO_CART',
        payload: {
            product,
            qty: 1
        }
    }
};

export const removeFromCart = (productId) => {
 
    return {
        type: 'REMOVE_FROM_CART',
        payload: {
            productId: productId
        }
    }
};
 
export const updateCartQuantity = (productId, quantity) => {
 
  return {
      type: 'UPDATE_CART_QUANTITY',
      payload: {
          productId,
          quantity: quantity
      }
    }
};
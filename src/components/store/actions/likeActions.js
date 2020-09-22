export const addToFav = (product) => {
    return {
        type: 'ADD_TO_FAV',
        payload: {
            product,
            qty: 1
        }
    }
};

export const removeFromFav = (productId) => {
    return {
        type: 'REMOVE_FROM_FAV',
        payload: {
            productId: productId
        }
    }
};
 
export const updateFavQuantity = (productId, quantity) => {
  return {
      type: 'UPDATE_FAV_QUANTITY',
      payload: {
          productId,
          quantity: quantity
      }
    }
};
const initialState = {
    cart: []
    // like: []
  };
   
  const cartReducer = (state = initialState, action) => {
   
      let cart = state.cart;
    //   let like = state.like;
   
      switch(action.type) {
   
          case 'ADD_TO_CART':
   
              cart.push(action.payload);
   
              return {
                  ...state,
                  cart: cart
              };
            
        //   case 'ADD_TO_FAV':
        //       like.push(action.payload);

        //       return{
        //         ...state,
        //         like: like
        //       }

          case 'UPDATE_CART_QUANTITY':
   
              let item = cart.find(item => item.product.id === action.payload.productId);
   
              let newCart = cart.filter(item => item.product.id !== action.payload.productId);
   
              item.quantity = action.payload.quantity;
   
              newCart.push(item);
   
              return {
                  ...state,
                  cart: newCart
              };
   
          case 'REMOVE_FROM_CART':
              return {
                  ...state,
                  cart: cart.filter(item => item.product.id !== action.payload.productId)
              };
        
        //   case 'REMOVE_FROM_FAV':
        //       return {
        //           ...state,
        //           like: like.filter(item => item.product.id !== action.payload.productId)
        //       }
          default:
              return state;
      }
  };
   
  export default cartReducer;
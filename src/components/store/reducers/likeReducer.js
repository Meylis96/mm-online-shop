const initialState = {
    like: []
};

const likeReducer = (state = initialState, action) => {
   
    let like = state.like;
 
    switch(action.type) {
          
        case 'ADD_TO_FAV':
            like.push(action.payload);

            return{
              ...state,
              like: like
            }

        case 'UPDATE_FAV_QUANTITY':
 
            let item = like.find(item => item.product.id === action.payload.productId);
 
            let newLike = like.filter(item => item.product.id !== action.payload.productId);
 
            item.quantity = action.payload.quantity;
 
            newLike.push(item);
 
            return {
                ...state,
                like: newLike
            };
      
        case 'REMOVE_FROM_FAV':
            return {
                ...state,
                like: like.filter(item => item.product.id !== action.payload.productId)
            }
        default:
            return state;
    }
};
 
export default likeReducer;
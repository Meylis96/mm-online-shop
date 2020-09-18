import productReducer from './productReducer';
import soapReducer from './soap/soapReducer';
import cartReducer from './cartReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    product: productReducer,
    soap: soapReducer,
    cart: cartReducer
});

export default rootReducer;
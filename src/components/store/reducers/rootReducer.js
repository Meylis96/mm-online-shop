import productReducer from './productReducer';
import soapReducer from './soap/soapReducer';
import powderReducer from './powder/powderReducer';
import cartReducer from './cartReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    product: productReducer,
    soap: soapReducer,
    cart: cartReducer,
    powder: powderReducer
});

export default rootReducer;
import productReducer from './productReducer';
import soapReducer from './soap/soapReducer';
import powderReducer from './powder/powderReducer';
import shampooReducer from './shampoo/shampooReducer';
import paperReducer from './paper/paperReducer';
import deodorantReducer from './deodorant/deodorantReducer';
import cartReducer from './cartReducer';
import likeReducer from './likeReducer';
import searchReducer from './searchReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    bestsellers: productReducer,
    soap: soapReducer,
    cart: cartReducer,
    like: likeReducer,
    powder: powderReducer,
    shampoo: shampooReducer,
    paper: paperReducer,
    deodorant: deodorantReducer,
    search: searchReducer
});

export default rootReducer;
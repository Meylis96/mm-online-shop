import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './media.scss';
import * as serviceWorker from './serviceWorker';
import rootReducer from './components/store/reducers/rootReducer';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {loadState, saveState} from './localStorage';
import { throttle } from 'lodash';

const persistedState = loadState();
const store = createStore(
  rootReducer,
  persistedState,
);

// store.subscribe(() => {
//   saveState(store.getState());
// });

// let clearItems = localStorage.clear();
// let time = new Date();

// setTimeout(clearItems, time.getTime() * 24000);
store.subscribe(throttle(() => {
  saveState(store.getState());
}, 1000));


ReactDOM.render(
  <Provider store={store}><App/></Provider>, document.getElementById('root')
);

serviceWorker.unregister();

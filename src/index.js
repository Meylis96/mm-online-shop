import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

const app = (
  <App/>
)

ReactDOM.render(
  app, document.getElementById('root')
);

serviceWorker.unregister();

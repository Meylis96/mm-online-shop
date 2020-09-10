import React from 'react';
import './App.scss';
import Header from './containers/Header/Header';
import Slider from './containers/Slider/Slider';
import About from './containers/About/About';
import Delivery from './containers/Delivery/Delivery';
import {Switch, Route} from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/" component={Slider} exact/>
        <Route path="/about" component={About}/>
        <Route path="/delivery" component={Delivery}/>
      </Switch>
    </div>
  );
}

export default App;

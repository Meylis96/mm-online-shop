import React from 'react';
import './App.scss';
import Header from './containers/Header/Header';
import Slider from './containers/Slider/Slider';
import About from './containers/About/About';
import Delivery from './containers/Delivery/Delivery';
import Contacts from './containers/Contacts/Contacts';
import Footer from './containers/Footer/Footer';
import {Switch, Route} from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Header/>
      
      <Switch>
        <Route path="/" component={Slider} exact/>
        <Route path="/#/about" component={About}/>
        <Route path="/#/delivery" component={Delivery} />
        <Route path="/#/contacts" component={Contacts}/>
        <Route render={() => <h1>404 not found</h1>} />
      </Switch>

      <Footer/>
    </div>
  );
}

export default App;

import React from 'react';
import './App.scss';
import Header from './containers/Header/Header';
import Slider from './containers/Slider/Slider';
import About from './containers/About/About';
import Delivery from './containers/Delivery/Delivery';
import Contacts from './containers/Contacts/Contacts';
import Footer from './containers/Footer/Footer';
import Products from './containers/Products/Products';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Powder from './components/ProductsItem/Powder/Powder';
import Soap from './components/ProductsItem/Soap/Soap';
import Shampoo from './components/ProductsItem/Shampoo/Shampoo';
import Paper from './components/ProductsItem/Paper/Paper';
import Deodorant from './components/ProductsItem/Deodorant/Deodorant';
import Sale from './components/ProductsItem/Sale/Sale';
import Discount from './components/ProductsItem/Discount/Discount';
import Bundle from './components/ProductsItem/Bundle/Bundle';
import Cart from './containers/Cart/Cart';
import Liked from './containers/Liked/Liked';
import Bestsellers from './components/ProductsItem/Bestsellers/Bestsellers';

const App = () => {
  return (
      <div className="App">
        <div className="App__container">
        <BrowserRouter>
          <Header/>
            <Switch>
              <Route path="/" component={Slider} exact/>
              <Route path="/about" component={About}/>
              <Route path="/delivery" component={Delivery}/>
              <Route path="/contacts" component={Contacts}/>
              <Route path="/cart" component={Cart}/>
              <Route path="/liked" component={Liked}/>
              <Route path="/products/powder" component={Powder}/>
              <Route path="/products/soap" component={Soap}/>
              <Route path="/products/shampoo" component={Shampoo}/>
              <Route path="/products/paper" component={Paper}/>
              <Route path="/products/deodorant" component={Deodorant}/>
              <Route path="/products/sale" component={Sale}/>
              <Route path="/products/discount" component={Discount}/>
              <Route path="/products/bundle" component={Bundle}/>
              <Route path="/products" component={Products}/>
              <Route render={() => <h1>404 not found</h1>}/>
              {/* <Redirect to={'/'} /> */}
            </Switch>
            <Route path="/" component={Bestsellers} exact/>
          <Footer/>
          </BrowserRouter>
        </div>
           
      </div>
  );
}

export default App;

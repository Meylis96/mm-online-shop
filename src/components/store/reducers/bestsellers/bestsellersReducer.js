import {v4} from 'node-uuid';
// const initialState = require('./products/soap.json');
import soap from '../soap/img/soap.jpg';
import like from '../soap/img/like.svg';
const initialState = {
  products: [
    {
      id: v4(),
      title: "aaaa",
      description: "TM",
      price: 20,
      image: soap,
      amount: 1000,
      cls: "bestsellers",
      productName: "Жидкое мыло 250мл.",
      heart: like
  },

  {
      id: v4(),
      title: "Жидкое мыло турецкое 250мл.",
      description: "Turkey soap",
      price: 20,
      image: soap,
      amount: 1000,
      cls: "bestsellers",
      productName: "Жидкое мыло турецкое 250мл.",
      heart: like
  },

  {
    id: v4(),
    title: "Жидкое мыло india 250мл.",
    description: "India soap",
    price: 20,
    image: soap,
    amount: 1000,
    cls: "bestsellers",
    productName: "Жидкое мыло india 250мл.",
    heart: like
  },

  {
    id: v4(),
    title: "asg",
    description: "India soap",
    price: 20,
    image: soap,
    amount: 1000,
    cls: "bestsellers",
    productName: "asfg",
    heart: like
  },

  {
    id: v4(),
    title: "dsgasg",
    description: "India soap",
    price: 20,
    image: soap,
    amount: 1000,
    cls: "bestsellers",
    productName: "dsgdasfg",
    heart: like
  },

  {
    id: v4(),
    title: "asdfg123",
    description: "India soap",
    price: 123,
    image: soap,
    amount: 1000,
    cls: "bestsellers",
    productName: "dfgh",
    heart: like
  },

  {
    id: v4(),
    title: "asdfg123",
    description: "India soap",
    price: 123,
    image: soap,
    amount: 1000,
    cls: "bestsellers",
    productName: "dfgh",
    heart: like
  }
  ]
}
  
  const bestsellersReducer = (state = initialState, action) => {
    return state;
  };

  
  export default bestsellersReducer;
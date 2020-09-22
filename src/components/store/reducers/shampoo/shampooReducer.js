import {v4} from 'node-uuid';
// const initialState = require('./products/shampoo.json');
import shampoo from './img/shampoo.jpg';
import like from './img/like.svg';
const initialState = {
  products: [
    {
      id: v4(),
      title: "Жидкое мыло 250мл.",
      description: "TM",
      price: 20,
      image: shampoo,
      amount: 1000,
      cls: "shampoo",
      productName: "Жидкое мыло 250мл.",
      heart: like
  },

  {
      id: v4(),
      title: "Жидкое мыло турецкое 250мл.",
      description: "Turkey shampoo",
      price: 20,
      image: shampoo,
      amount: 1000,
      cls: "shampoo",
      productName: "Жидкое мыло турецкое 250мл.",
      heart: like
  },

  {
    id: v4(),
    title: "Жидкое мыло india 250мл.",
    description: "India shampoo",
    price: 20,
    image: shampoo,
    amount: 1000,
    cls: "shampoo",
    productName: "Жидкое мыло india 250мл.",
    heart: like
  },

  {
    id: v4(),
    title: "asg",
    description: "India shampoo",
    price: 20,
    image: shampoo,
    amount: 1000,
    cls: "shampoo",
    productName: "asfg",
    heart: like
  },

  {
    id: v4(),
    title: "dsgasg",
    description: "India shampoo",
    price: 20,
    image: shampoo,
    amount: 1000,
    cls: "shampoo",
    productName: "dsgdasfg",
    heart: like
  },

  {
    id: v4(),
    title: "asdfg123",
    description: "India shampoo",
    price: 123,
    image: shampoo,
    amount: 1000,
    cls: "shampoo",
    productName: "dfgh",
    heart: like
  },

  {
    id: v4(),
    title: "asdfg123",
    description: "India shampoo",
    price: 123,
    image: shampoo,
    amount: 1000,
    cls: "shampoo",
    productName: "dfgh",
    heart: like
  }
  ]
}
  
  const shampooReducer = (state = initialState, action) => {
    return state;
  };
  
  export default shampooReducer;
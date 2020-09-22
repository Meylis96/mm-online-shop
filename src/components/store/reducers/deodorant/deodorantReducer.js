import {v4} from 'node-uuid';
// const initialState = require('./products/deodorant.json');
import deodorant from './img/deodorant.jpg';
import like from './img/like.svg';
const initialState = {
  products: [
    {
      id: v4(),
      title: "Жидкое мыло 250мл.",
      description: "TM",
      price: 20,
      image: deodorant,
      amount: 1000,
      cls: "deodorant",
      productName: "Жидкое мыло 250мл.",
      heart: like
  },

  {
      id: v4(),
      title: "Жидкое мыло турецкое 250мл.",
      description: "Turkey deodorant",
      price: 20,
      image: deodorant,
      amount: 1000,
      cls: "deodorant",
      productName: "Жидкое мыло турецкое 250мл.",
      heart: like
  },

  {
    id: v4(),
    title: "Жидкое мыло india 250мл.",
    description: "India deodorant",
    price: 20,
    image: deodorant,
    amount: 1000,
    cls: "deodorant",
    productName: "Жидкое мыло india 250мл.",
    heart: like
  },

  {
    id: v4(),
    title: "asg",
    description: "India deodorant",
    price: 20,
    image: deodorant,
    amount: 1000,
    cls: "deodorant",
    productName: "asfg",
    heart: like
  },

  {
    id: v4(),
    title: "dsgasg",
    description: "India deodorant",
    price: 20,
    image: deodorant,
    amount: 1000,
    cls: "deodorant",
    productName: "dsgdasfg",
    heart: like
  },

  {
    id: v4(),
    title: "asdfg123",
    description: "India deodorant",
    price: 123,
    image: deodorant,
    amount: 1000,
    cls: "deodorant",
    productName: "dfgh",
    heart: like
  },

  {
    id: v4(),
    title: "asdfg123",
    description: "India deodorant",
    price: 123,
    image: deodorant,
    amount: 1000,
    cls: "deodorant",
    productName: "dfgh",
    heart: like
  }
  ]
}
  
  const deodorantReducer = (state = initialState, action) => {
    return state;
  };
  
  export default deodorantReducer;
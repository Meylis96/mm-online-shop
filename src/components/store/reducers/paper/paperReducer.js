import {v4} from 'node-uuid';
// const initialState = require('./products/paper.json');
import paper from './img/paper.jpg';
import like from './img/like.svg';
const initialState = {
  products: [
    {
      id: v4(),
      title: "Жидкое мыло 250мл.",
      description: "TM",
      price: 20,
      image: paper,
      amount: 1000,
      cls: "paper",
      productName: "Жидкое мыло 250мл.",
      heart: like
  },

  {
      id: v4(),
      title: "Жидкое мыло турецкое 250мл.",
      description: "Turkey paper",
      price: 20,
      image: paper,
      amount: 1000,
      cls: "paper",
      productName: "Жидкое мыло турецкое 250мл.",
      heart: like
  },

  {
    id: v4(),
    title: "Жидкое мыло india 250мл.",
    description: "India paper",
    price: 20,
    image: paper,
    amount: 1000,
    cls: "paper",
    productName: "Жидкое мыло india 250мл.",
    heart: like
  },

  {
    id: v4(),
    title: "asg",
    description: "India paper",
    price: 20,
    image: paper,
    amount: 1000,
    cls: "paper",
    productName: "asfg",
    heart: like
  },

  {
    id: v4(),
    title: "dsgasg",
    description: "India paper",
    price: 20,
    image: paper,
    amount: 1000,
    cls: "paper",
    productName: "dsgdasfg",
    heart: like
  },

  {
    id: v4(),
    title: "asdfg123",
    description: "India paper",
    price: 123,
    image: paper,
    amount: 1000,
    cls: "paper",
    productName: "dfgh",
    heart: like
  },

  {
    id: v4(),
    title: "asdfg123",
    description: "India paper",
    price: 123,
    image: paper,
    amount: 1000,
    cls: "paper",
    productName: "dfgh",
    heart: like
  }
  ]
}
  
  const paperReducer = (state = initialState, action) => {
    return state;
  };
  
  export default paperReducer;
import {v4} from 'node-uuid';
// const initialState = require('./products/soap.json');
import powder from './img/ariel_12.jpg';
import like from './img/like.svg';
const initialState = {
  products: [
    {
      id: v4(),
      title: "Стиральный порошок Ariel",
      description: "TM",
      price: 400,
      image: powder,
      amount: 1000,
      cls: "powder",
      productName: "Стиральный порошок Ariel",
      heart: like
  },

  {
      id: v4(),
      title: "Стиральный порошок Ariel",
      description: "Turkey soap",
      price: 400,
      image: powder,
      amount: 1000,
      cls: "powder",
      productName: "ЖСтиральный порошок Ariel",
      heart: like
  },

  {
    id: v4(),
    title: "Стиральный порошок Ariel",
    description: "India soap",
    price: 400,
    image: powder,
    amount: 1000,
    cls: "powder",
    productName: "Стиральный порошок Ariel",
    heart: like
  },

  {
    id: v4(),
    title: "asg",
    description: "Стиральный порошок Ariel",
    price: 400,
    image: powder,
    amount: 1000,
    cls: "powder",
    productName: "Стиральный порошок Ariel",
    heart: like
  },

  {
    id: v4(),
    title: "dsgasg",
    description: "IСтиральный порошок Ariel",
    price: 400,
    image: powder,
    amount: 1000,
    cls: "powder",
    productName: "Стиральный порошок Ariel",
    heart: like
  },

  {
    id: v4(),
    title: "asdfg123",
    description: "Стиральный порошок Ariel",
    price: 400,
    image: powder,
    amount: 1000,
    cls: "powder",
    productName: "Стиральный порошок Ariel",
    heart: like
  },

  {
    id: v4(),
    title: "asdfg123",
    description: "Стиральный порошок Ariel",
    price: 400,
    image: powder,
    amount: 1000,
    cls: "powder",
    productName: "Стиральный порошок Ariel",
    heart: like
  }
  ]
}
  
  const soapReducer = (state = initialState, action) => {
    return state;
  };
  
  export default soapReducer;
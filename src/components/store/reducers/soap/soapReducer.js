
// const initialState = require('./products/soap.json');
import soap from '../../../ProductsItem/Soap/img/soap.jpg';
const initialState = {
  products: [
    {
      id: 1,
      title: "Soap TM",
      description: "TM",
      price: 20,
      image: soap,
      amount: 5,
      cls: "soap",
      productName: "Жидкое мыло 250мл."
  },

  {
      id: 2,
      title: "Soap Turkey",
      description: "Turkey soap",
      price: 20,
      image: soap,
      amount: 5,
      cls: "soap",
      productName: "Жидкое мыло турецкое 250мл."
  }
  ]
}
  
  const soapReducer = (state = initialState, action) => {
    return state;
  };
  
  export default soapReducer;
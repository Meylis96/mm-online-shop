import React, { Component } from 'react';
import './Cart.scss';
import Item from './Item';
import Loader from '../../components/UI/Loader/Loader';
import { connect } from 'react-redux';
import Modal from '../Modal/Modal';
import spinner from './img/spinner.svg';

function loaderSpinner(){
    return new Promise((resolve) => setTimeout(() => resolve(), 1500));
}



class Cart extends Component{

    state = {
        loader: true,
        show: false,
        name: '',
        phone: '',
        address: '',
        itemName: this.props.cart.map((item) => {
            return item.product.title;
        }),
        productPrice: this.props.cart.map((item) => {
            return JSON.stringify(item.product.price);
        }),
        totalPrice: 0,
        cart: this.props.cart,
        qty: this.props.cart.map((item) => {
            return item.quantity;
        })
    }

    componentDidMount(){
        loaderSpinner().then(() => this.setState({loader: false}));
    }

    componentWillUpdate(){
        console.log(this.state.productPrice);
        console.log(this.state.qty);
    }


    showModal = () => {
        let total = 0;
        this.props.cart.map(item => total += item.product.price * item.quantity);
        return this.setState({ show: true, totalPrice: total});
    };
    
    hideModal = () => {
        this.setState({ show: false });
        console.log(this.state.qty);
    };

    preventScroll = () => {
        document.body.style = "overflow:hidden"
    };

    submitHandler = (e) => {

        e.preventDefault();

        const form = document.querySelector('.modal__form');
    
        let statusMessage = document.createElement('div');
        statusMessage.classList.add('status');
        form.appendChild(statusMessage);

        let formData = new FormData();

        formData.append("name", this.state.name);
        formData.append("phone", this.state.phone);
        formData.append("address", this.state.address);
        formData.append("itemName", this.state.itemName);
        formData.append("totalPrice", this.state.totalPrice);
        formData.append("quantity", this.state.qty);
        formData.append("price", this.state.productPrice);

        const messages =  {
            loading: spinner,
            sucess: "Спасибо! Ваш заказ принят.",
            error: "Произошла ошибка. Повторите чуть позже"
        }

        const postData = async (url, data) => {
            document.querySelector('.status').innerHTML = messages.loading;
            let res = await fetch(url, {
                method: "POST",
                body: data
            });

            return await res.text();
        };

        postData("mailer/order.php", formData)
        .then(res =>console.log(res), statusMessage.innerHTML = messages.sucess)
        .catch(() => statusMessage.innerHTML = messages.error)
        .finally(
            this.setState({name: '', phone: '', address: '', items: ''}),
            setTimeout(() => {
            statusMessage.remove();
            this.setState({show: false});
            localStorage.clear();
        }, 5000))

    }


    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    };


    render(){
        const {loader} = this.state;

        let total = 0;

        this.props.cart.map(item => total += item.product.price * item.quantity);

        if(loader) { 
            return <Loader/>;
        }
        
        const cart  = this.props.cart.length > 0 ? (
            <div>
                <div className="panel-body">
                    {
                        this.props.cart.map(item => {
                            return (
                                <div key={item.product.id}>
                                    <Item item={item} />
                                    <hr />
                                </div>
                            )
                        })
                    }
                </div>
                <div className="cart__footer">
                    <h4>Общая сумма {total ? total : '00'}.00 ТМТ</h4>
                    <button type="button" onClick={this.showModal} disabled={!total}>Оформить заказ</button>
                </div>
            </div>
 
        ) : (
            <div className="panel-body">
                <h2>Корзина Пуста</h2>
            </div>
        )
 
        return (
            <>
                <div className="cart">
                    <div className="container">
                        <h1 className="cart__title">Корзина</h1>
                        <div className="cart__descr">
                            <label>Изображение</label>
                            <label>Наименование</label>
                            <label>Цена</label>
                            <label>Кол-во.</label>
                        </div>
                        { cart }
                    </div>
                    {this.state.show ? this.preventScroll() : document.body.style.overflow = ""}
                </div>
                <Modal show={this.state.show} handleClose={this.hideModal}>
                    <form className="modal__form" onSubmit={this.submitHandler}>
                        <h1 className="modal__title">Пожалуйста введите свои данные</h1>
                        <div className="modal__info">
                            <input onChange={this.handleChange('name')} type="text" value={this.state.name} placeholder="Ваше имя" required name="name"/>
                            <input onChange={this.handleChange('phone')} type="tel" value={this.state.phone} placeholder="Ваш номер" required name="tel"/>
                            <input onChange={this.handleChange('address')} type="text" value={this.state.address} placeholder="Ваш адрес" required name="address" />
                        </div>
                        <div className="modal__descr">
                            <p>Общая сумма: {total}.00 TMT</p>
                            <button className="modal__send">Отправить</button>
                        </div>
                    </form>
                </Modal>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart.cart
    }
  };
   
  export default connect(mapStateToProps)(Cart);
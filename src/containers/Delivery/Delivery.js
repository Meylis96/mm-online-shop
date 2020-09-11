import React, { Component } from 'react';
import './Delivery.scss';
import box from './img/box.jpg';
import Loader from '../../components/UI/Loader/Loader';

class Delivery extends Component { 

    state = {
        loader: true
    }

    componentDidMount(){
        loaderSpinner().then(() => this.setState({loader: false}));
    }

    render(){
        const {loader} = this.state;

        if(loader) { 
            return <Loader/>;
        }

        return(
            <div className="delivery">
                <div className="container">
                    <div className="delivery__title">Доставка и оплата</div>
                    <div className="delivery__info">
                        <div className="delivery__descr">
                            <h1>Доставка</h1>
                            <ul>
                                <li>- Доставка осуществляется как по Ашхабаду, так и по всем городам Туркменистана, при помощи курьерской сети Readit.</li>
                                <li>- Доставка осуществляется в течение 3-5 рабочих дней по Ашхабаду и 5-7 дней по другим городам Туркменистана.</li>
                                <li>- Стоимость доставки всех заказов по Ашхабаду составляет 10 манат, по другим городам Туркменистана - 30 манат.</li>
                                <li>- Все заказы общей стоимостью свыше 200 манат доставляются БЕСПЛАТНО!</li>
                                <li>- Возврат товара возможен только в случае заводского брака.</li>
                            </ul>
                            <h2>Оплата</h2>
                            <ul>
                                <li>- В момент оформления заказа Вы ничего не платите. Заказ оплачивается при его получении, наличными средствами курьеру нашей компании.</li>
                                <li>- Заказы общей стоимостью более 6000 манат считаются оптовыми. Для подтверждения оптового заказа необходимо внести предоплату в размере 50% от стоимости заказа.</li>
                                <li>- Более подробную информацию об оптовых заказах вы можете получить связавшись с нашей службой поддержкой.</li>
                            </ul>
                        </div>
                        <img src={box} alt="box"></img>
                    </div>
                </div>
            </div>
        )
    }
}

function loaderSpinner(){
    return new Promise((resolve) => setTimeout(() => resolve(), 1500));
}


export default Delivery;
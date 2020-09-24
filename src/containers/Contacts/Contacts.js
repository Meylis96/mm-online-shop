import React, { Component } from 'react';
import './Contacts.scss';
import FormInput from '../../components/UI/Input/FormInputs';
import TextArea from '../../components/UI/Input/TextArea';
import Button from '../../components/UI/Button/Button';
import Loader from '../../components/UI/Loader/Loader';


class Contacts extends Component{

    state = {
        loader: true,
        name: '',
        phone: '',
        email: '',
        message: '',
    }

    submitHandler = (e) => {

        e.preventDefault();

        const form = document.querySelector('form');
    
        let statusMessage = document.createElement('div');
        statusMessage.classList.add('status');
        form.appendChild(statusMessage);

        let formData = new FormData();

        formData.append("name", this.state.name);
        formData.append("phone", this.state.phone);
        formData.append("email", this.state.email);
        formData.append("message", this.state.message);

        const messages =  {
            // loading: spinner,
            sucess: "Спасибо! Мы скоро свяжемся с Вами.",
            error: "Произошла ошибка. Повторите чуть позже"
        }

        const postData = async (url, data) => {
            // document.querySelector('.status').innerHTML = `<img src="${messages.loading}"></img>`;
            let res = await fetch(url, {
                method: "POST",
                body: data
            });

            return await res.text();
        };

        postData("mailer/smart.php", formData)
        .then(res => statusMessage.innerHTML = messages.sucess)
        .catch(() => statusMessage.innerHTML = messages.error)
        .finally(
            this.setState({name: '', phone: '', email: '', message: ''}),
            setTimeout(() => {
            statusMessage.remove();
        }, 5000))
    }

    componentDidMount(){
        loaderSpinner().then(() => this.setState({loader: false}));
    }

    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    };

    render(){
        const {loader, name, email, phone, message} = this.state

        if(loader) { 
            return <Loader/>;
        }

        return (
             <div className="contacts">
                <div className="container">
                <h1 className="contacts__title">Котакты</h1>
                <div className="contacts__info">
                    <div className="contacts__wrapper">

                    <div className="contacts__descr">
                        <h2>Адрес:</h2>
                        <a href="https://goo.gl/maps/cQVhk9Sff3fNGe638" target="blank">Ул. Айтакова, д.102, кв.80</a>
                    </div>

                    <div className="contacts__descr">
                        <h2>Тел:</h2>
                        <a href="tel:+99312345678">+993 12 34 56 78</a>
                    </div>

                    <div className="contacts__descr">
                        <h2>E-mail:</h2>
                        <a href="mailto:example@gmail.com">example@gmail.com</a>
                    </div>
                    </div>

                    <div className="contacts__map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6297.083332261776!2d58.36983746692627!3d37.894400060770835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2str!4v1599812918017!5m2!1sru!2str" allowFullScreen=""></iframe>
                    </div>
                </div>

                <div className="contacts__feedback">
                    <h1 className="contacts__feedback_title">
                    У Вас появились вопросы? <br/>
                    Будем рады на них ответить.
                    </h1>

                    <form onSubmit={this.submitHandler} className="contacts__form">
                        <div className="contacts__inputs">
                            <FormInput 
                            type="text"
                            id="inputIndex"
                            placeholder="Ваше имя..."
                            name="name"
                            value={name}
                            onChange={this.handleChange('name')}
                            required/>

                            <FormInput 
                            type="tel"
                            id="inputIndex"
                            placeholder="Ваш номер..."
                            required
                            value={phone}
                            onChange={this.handleChange('phone')}
                            name="phone"/>

                            <FormInput 
                            type="email"
                            id="inputIndex"
                            placeholder="Ваша почта..."
                            onChange={this.handleChange('email')}
                            required
                            value={email}
                            name="email"/>
                        </div>
                        
                        <div className="contacts__text">
                            <TextArea 
                            type="text"
                            id="inputIndex"
                            placeholder="Ваше сообщение..."
                            onChange={this.handleChange('message')}
                            value={message}
                            name="message"
                            required/>
                        </div>
                        <div className="status">

                        </div>
                        {this.statusMessage}

                        <Button type="contacts" onClick={this.clickBtn}>Отправить</Button>
                    </form>
                </div>
            </div>
        </div>
        )
    }
}

function loaderSpinner(){
    return new Promise((resolve) => setTimeout(() => resolve(), 1500));
}


export default Contacts;
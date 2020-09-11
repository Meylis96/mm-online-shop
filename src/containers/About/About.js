import React, { Component } from 'react';
import './About.scss';
import about from './img/about.jpg';
import Loader from '../../components/UI/Loader/Loader';

class About extends Component {
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
            <div className="about">
                <div className="container">
                    <div className="about__title">О нас </div>
                    <h1 className="about__subtitle">Чистота – залог здоровья! Порядок прежде всего!</h1>

                    <div className="about__info">
                        <div className="about__img"><img src={about} alt="about"></img></div>

                        <div className="about__descr">
                            <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
                            <p>В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function loaderSpinner(){
    return new Promise((resolve) => setTimeout(() => resolve(), 1500));
}

export default About;
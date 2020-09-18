import React, { Component } from 'react';
import './Liked.scss';
import Loader from '../../components/UI/Loader/Loader';

function loaderSpinner(){
    return new Promise((resolve) => setTimeout(() => resolve(), 1500));
}


class Liked extends Component{
    state = {
        loader: true
    };

    componentDidMount(){
        loaderSpinner().then(() => this.setState({loader: false}));
    }


    render(){
        const {loader} = this.state;

        if(loader) { 
            return <Loader/>;
        }
        
        return(
            <div className="liked">
                <div className="container">
                    <h1>Понравившиеся товары</h1>
                </div>
            </div>
        )
    }
}

export default Liked;
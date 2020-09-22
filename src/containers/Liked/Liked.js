import React, { Component } from 'react';
import './Liked.scss';
import Item from './Item';
import Loader from '../../components/UI/Loader/Loader';
import { connect } from 'react-redux';

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

        // let total = 0;

        // this.props.like.map(item => total += item.product.price * item.quantity);

        if(loader) { 
            return <Loader/>;
        }
        
        const like  = this.props.like.length > 0?(
            <>
                <div className="like__wrapper">
                    {
                        this.props.like.map(item => {
                            return (
                                <div className="like__items" key={item.product.id}>
                                    <Item item={item} />
                                </div>
                            )
                        })
                    }
                </div>
            </>
        ) : (
            <div className="panel-body">
                <h2>Пусто</h2>
            </div>
        )
 
        return (
                <div className="like">
                    <div className="container">
                        <h1 className="like__title">Понравившиеся товары</h1>
                        { like }
                    </div>
                </div>
        )
    }
}

const mapStateToProps = (state) => {
 
    return {
        like: state.like.like
    }
  };
   
  export default connect(mapStateToProps)(Liked);
import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';

const ProductsMenu = props => {
    // const { history } = props;
    // onClick={() => history.push('/products/' + props.name)}
    return <div><NavLink to={'/products/' + props.name}><img src={props.src} alt={props.name}></img></NavLink></div>
}


export default withRouter(ProductsMenu);
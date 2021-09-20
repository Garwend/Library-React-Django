import React from 'react';
import { useSelector } from "react-redux";
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const userData = useSelector(state => state.userReducer.userData)
    const isLoggedIn = window.localStorage.getItem('token') !== null && userData !== {}

    return <Route {...rest} render={() => {
        return isLoggedIn ? <Component /> : <Redirect to='/login' />
    }} />

}

export default PrivateRoute